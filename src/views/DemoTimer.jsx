import { useState, useEffect, useRef, useCallback } from 'react';

// interface UseTimerOptions {
//   initialTime?: number;        // 初始时间（秒）
//   autoStart?: boolean;         // 是否自动开始
//   interval?: number;           // 更新间隔（毫秒）
//   onComplete?: () => void;     // 完成回调
//   onTick?: (time: number) => void; // 每次tick回调
// }

// interface TimerControls {
//   time: number;                // 当前时间（秒）
//   isRunning: boolean;          // 是否正在运行
//   isCompleted: boolean;        // 是否完成
//   start: () => void;           // 开始计时
//   pause: () => void;           // 暂停计时
//   reset: () => void;           // 重置计时
//   restart: () => void;         // 重新开始
//   setTime: (time: number) => void; // 设置时间
//   addTime: (seconds: number) => void; // 增加时间
//   subtractTime: (seconds: number) => void; // 减少时间
//   formatTime: (format?: string) => string; // 格式化时间
// }

export function useTimer({
  initialTime = 60,
  autoStart = false,
  interval = 1000,
  onComplete,
  onTick
} = {}) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);
  const remainingTimeRef = useRef(initialTime);

  // 清理计时器
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // 格式化时间显示
  const formatTime = useCallback((format = 'mm:ss') => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (num) => num.toString().padStart(2, '0');

    return format
      .replace('hh', pad(hours))
      .replace('h', hours.toString())
      .replace('mm', pad(minutes))
      .replace('m', minutes.toString())
      .replace('ss', pad(seconds))
      .replace('s', seconds.toString());
  }, [time]);

  // 开始计时
  const start = useCallback(() => {
    if (isRunning || time <= 0) return;
    
    setIsRunning(true);
    setIsCompleted(false);
    startTimeRef.current = Date.now();
    remainingTimeRef.current = time;

    clearTimer();
    
    timerRef.current = setInterval(() => {
      setTime(prev => {
        const newTime = prev - 1;
        
        // 触发tick回调
        onTick?.(newTime);
        
        if (newTime <= 0) {
          clearTimer();
          setIsRunning(false);
          setIsCompleted(true);
          onComplete?.();
          return 0;
        }
        
        return newTime;
      });
    }, interval);
  }, [isRunning, time, interval, clearTimer, onComplete, onTick]);

  // 暂停计时
  const pause = useCallback(() => {
    if (!isRunning) return;
    
    clearTimer();
    setIsRunning(false);
    
    // 计算剩余时间
    const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
    remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
  }, [isRunning, clearTimer]);

  // 重置计时
  const reset = useCallback(() => {
    clearTimer();
    setTime(initialTime);
    setIsRunning(false);
    setIsCompleted(false);
    remainingTimeRef.current = initialTime;
  }, [initialTime, clearTimer]);

  // 重新开始
  const restart = useCallback(() => {
    clearTimer();
    setTime(initialTime);
    setIsRunning(true);
    setIsCompleted(false);
    remainingTimeRef.current = initialTime;
    startTimeRef.current = Date.now();
    
    timerRef.current = setInterval(() => {
      setTime(prev => {
        const newTime = prev - 1;
        onTick?.(newTime);
        
        if (newTime <= 0) {
          clearTimer();
          setIsRunning(false);
          setIsCompleted(true);
          onComplete?.();
          return 0;
        }
        
        return newTime;
      });
    }, interval);
  }, [initialTime, interval, clearTimer, onComplete, onTick]);

  // 设置时间
  const setTimerTime = useCallback((newTime) => {
    if (newTime < 0) return;
    
    clearTimer();
    setTime(newTime);
    setIsRunning(false);
    setIsCompleted(false);
    remainingTimeRef.current = newTime;
  }, [clearTimer]);

  // 增加时间
  const addTime = useCallback((seconds) => {
    if (seconds <= 0) return;
    
    setTime(prev => {
      const newTime = prev + seconds;
      if (isRunning) {
        remainingTimeRef.current = newTime;
      }
      return newTime;
    });
  }, [isRunning]);

  // 减少时间
  const subtractTime = useCallback((seconds) => {
    if (seconds <= 0) return;
    
    setTime(prev => {
      const newTime = Math.max(0, prev - seconds);
      if (isRunning) {
        remainingTimeRef.current = newTime;
      }
      if (newTime <= 0) {
        setIsCompleted(true);
        onComplete?.();
      }
      return newTime;
    });
  }, [isRunning, onComplete]);

  // 组件卸载时清理
  useEffect(() => {
    if (autoStart) {
      start();
    }
    
    return () => {
      clearTimer();
    };
  }, [autoStart, start, clearTimer]);

  return {
    time,
    isRunning,
    isCompleted,
    start,
    pause,
    reset,
    restart,
    setTime: setTimerTime,
    addTime,
    subtractTime,
    formatTime,
  };
}

// ====================== 使用示例 ======================

// 示例1：基本倒计时
export function CountdownTimer() {
    console.log(useTimer);
    
  const { time, isRunning, start, pause, reset, formatTime } = useTimer({
    initialTime: 300, // 5分钟
    onComplete: () => console.log('倒计时结束!'),
  });

  return (
    <div>
      <div>剩余时间: {formatTime('mm:ss')}</div>
      <div>格式化显示: {formatTime('hh:mm:ss')}</div>
      <button onClick={start} disabled={isRunning}>开始</button>
      <button onClick={pause} disabled={!isRunning}>暂停</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}

// 示例2：正计时（秒表）
export function StopwatchTimer() {
  const { time, isRunning, start, pause, reset, formatTime } = useTimer({
    initialTime: 0,
    autoStart: false,
  });

  // 正计时需要特殊处理
  const stopwatchTime = 3600 - time; // 假设我们显示正计时

  return (
    <div>
      <div>已用时间: {formatTime('hh:mm:ss')}</div>
      <button onClick={start} disabled={isRunning}>开始</button>
      <button onClick={pause} disabled={!isRunning}>暂停</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}

// 示例3：带控制功能的计时器
export function AdvancedTimer() {
  const {
    time,
    isRunning,
    isCompleted,
    start,
    pause,
    reset,
    restart,
    addTime,
    subtractTime,
    setTime,
    formatTime,
  } = useTimer({
    initialTime: 180,
    onComplete: () => alert('时间到!'),
    onTick: (time) => {
      // 可以在这里添加每秒执行的操作
      if (time === 10) console.log('最后10秒!');
    },
  });

  return (
    <div>
      <div>
        剩余时间: {formatTime('mm:ss')}
        {isCompleted && <span> - 已完成!</span>}
      </div>
      
      <div>
        <button onClick={start} disabled={isRunning || time === 0}>
          开始
        </button>
        <button onClick={pause} disabled={!isRunning}>
          暂停
        </button>
        <button onClick={reset}>重置</button>
        <button onClick={restart}>重新开始</button>
      </div>
      
      <div>
        <button onClick={() => addTime(30)}>+30秒</button>
        <button onClick={() => subtractTime(30)}>-30秒</button>
        <button onClick={() => setTime(60)}>设为1分钟</button>
        <button onClick={() => setTime(300)}>设为5分钟</button>
      </div>
    </div>
  );
}

// 简单的倒计时
export function SimpleCountdown() {
  const { time, start, pause, formatTime } = useTimer({
    initialTime: 60,
    onComplete: () => console.log('完成！')
  });

  return (
    <div>
      <h2>{formatTime('mm:ss')}</h2>
      <button onClick={start}>开始</button>
      <button onClick={pause}>暂停</button>
    </div>
  );
}

// 番茄钟计时器
export function PomodoroTimer() {
  const [phase, setPhase] = useState('work');
  
  const { time, isRunning, start, reset, formatTime } = useTimer({
    initialTime: phase === 'work' ? 1500 : 300, // 25分钟工作，5分钟休息
    onComplete: () => {
      if (phase === 'work') {
        setPhase('break');
        alert('休息时间！');
      } else {
        setPhase('work');
        alert('工作时间！');
      }
      reset();
      start();
    }
  });

  return (
    <div>
      <div>当前阶段: {phase === 'work' ? '工作' : '休息'}</div>
      <div>剩余时间: {formatTime('mm:ss')}</div>
      <button onClick={start} disabled={isRunning}>
        {isRunning ? '进行中...' : '开始'}
      </button>
    </div>
  );
}