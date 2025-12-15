import { useState, useMemo } from "react";
import "./InterviewGrid.css";

export const mockData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28, department: 'Engineering', salary: 85000 },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 35, department: 'Marketing', salary: 72000 },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', age: 42, department: 'Sales', salary: 68000 },
  { id: 4, name: 'David Wilson', email: 'david@example.com', age: 31, department: 'Engineering', salary: 92000 },
  { id: 5, name: 'Eva Brown', email: 'eva@example.com', age: 26, department: 'HR', salary: 55000 },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', age: 38, department: 'Engineering', salary: 105000 },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', age: 45, department: 'Finance', salary: 95000 },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', age: 29, department: 'Marketing', salary: 65000 },
  { id: 9, name: 'Irene Clark', email: 'irene@example.com', age: 33, department: 'Sales', salary: 78000 },
  { id: 10, name: 'Jack White', email: 'jack@example.com', age: 41, department: 'Engineering', salary: 110000 },
  { id: 11, name: 'Karen Harris', email: 'karen@example.com', age: 27, department: 'HR', salary: 58000 },
  { id: 12, name: 'Leo Martin', email: 'leo@example.com', age: 36, department: 'Finance', salary: 89000 },
  { id: 13, name: 'Mona Scott', email: 'mona@example.com', age: 32, department: 'Engineering', salary: 97000 },
  { id: 14, name: 'Nathan King', email: 'nathan@example.com', age: 39, department: 'Marketing', salary: 81000 },
  { id: 15, name: 'Olivia Adams', email: 'olivia@example.com', age: 44, department: 'Sales', salary: 74000 },
];

const InverviewGrid = () => {
    // 状态定义
    const [data, setData] = useState(mockData); // 原始数据
    const [searchTerm, setSearchTerm] = useState(''); // 搜索关键词
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' }); // 排序配置
    const [currentPage, setCurrentPage] = useState(1); // 当前页码
    const [itemsPerPage, setItemsPerPage] = useState(5); // 每页显示数量
    const [pageJumpInput, setPageJumpInput] = useState(''); // 页面跳转输入

    // 处理搜索功能
    const handleSearch = (event) => {
        console.log("handleSearch", event);
        
        setSearchTerm(event.target.value);
        setCurrentPage(1); // 搜索后重置到第一页
    };

    // 处理排序功能
    const handleSort = (key) => {
        console.log("handleSort");
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // 处理分页变化
    const handlePageChange = (pageNumber) => {
        console.log("handlePageChange");
        setCurrentPage(pageNumber);
    };

    // 处理每页显示数量变化
    const handleItemsPerPageChange = (event) => {
        console.log("handleItemsPerPageChange");
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // 重置到第一页
    };

    // 处理页面跳转
    const handlePageJump = () => {
        console.log("handlePageJump");
        const pageNum = parseInt(pageJumpInput);
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
          setCurrentPage(pageNum);
          setPageJumpInput('');
        } else {
          alert(`请输入有效的页码 (1-${totalPages})`);
        }
    };

    // 使用useMemo来优化性能，避免每次渲染都重新计算
    const filteredData = useMemo(() => {
        console.log("filteredData");
        
        if (!searchTerm) return data;
        
        return data.filter(item => 
        Object.values(item).some(value => 
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
        );
    }, [data, searchTerm]);

    // 搜索、排序和分页数据处理
    const processedData = useMemo(() => {
        console.log("processedData");

        // 创建数据副本以避免直接修改原始数据
        const sortableData = [...filteredData];
        
        // 排序逻辑
        if (sortConfig.key) {
        sortableData.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            
            // 处理不同类型的排序
            if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortConfig.direction === 'ascending' 
                ? aValue.localeCompare(bValue) 
                : bValue.localeCompare(aValue);
            } else {
            return sortConfig.direction === 'ascending' 
                ? aValue - bValue 
                : bValue - aValue;
            }
        });
        }
        
        return sortableData;
    }, [filteredData, sortConfig]);

    // 计算当前页的数据
    const currentItems = useMemo(() => {
        console.log("currentItems");

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return processedData.slice(indexOfFirstItem, indexOfLastItem);
    }, [processedData, currentPage, itemsPerPage]);

    // 计算总页数
    const totalPages = Math.ceil(processedData.length / itemsPerPage);

    // 生成页码按钮
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // 显示部分页码（避免过多按钮）
    const getVisiblePageNumbers = () => {
        console.log("getVisiblePageNumbers");
        const maxVisiblePages = 5;
        const halfVisible = Math.floor(maxVisiblePages / 2);
        
        let startPage = Math.max(currentPage - halfVisible, 1);
        let endPage = Math.min(currentPage + halfVisible, totalPages);
        
        // 调整以确保显示maxVisiblePages个页码
        if (endPage - startPage + 1 < maxVisiblePages) {
        if (startPage === 1) {
            endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
        } else {
            startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }
        }
        
        return pageNumbers.slice(startPage - 1, endPage);
    };

    // 获取排序指示器
    const getSortIndicator = (key) => {
        console.log("getSortIndicator");
        if (sortConfig.key === key) {
        return sortConfig.direction === 'ascending' ? '↑' : '↓';
        }
        return '';
    };

    return (
    <div className="list-container">
      <h1>员工列表</h1>
      <p className="subtitle">这是一个带有排序、搜索、分页和跳转功能的React列表组件</p>
      
      {/* 搜索和每页显示数量控制 */}
      <div className="controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="搜索员工..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
          <span className="result-count">找到 {filteredData.length} 条记录</span>
        </div>
        
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">每页显示: </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      
      {/* 列表表格 */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>
                ID {getSortIndicator('id')}
              </th>
              <th onClick={() => handleSort('name')}>
                姓名 {getSortIndicator('name')}
              </th>
              <th onClick={() => handleSort('email')}>
                邮箱 {getSortIndicator('email')}
              </th>
              <th onClick={() => handleSort('age')}>
                年龄 {getSortIndicator('age')}
              </th>
              <th onClick={() => handleSort('department')}>
                部门 {getSortIndicator('department')}
              </th>
              <th onClick={() => handleSort('salary')}>
                薪资 {getSortIndicator('salary')}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <span className={`dept-badge dept-${item.department.toLowerCase()}`}>
                      {item.department}
                    </span>
                  </td>
                  <td>${item.salary.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">
                  没有找到匹配的记录
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* 分页控件 */}
      <div className="pagination">
        <div className="pagination-info">
          显示第 {(currentPage - 1) * itemsPerPage + 1} 到{' '}
          {Math.min(currentPage * itemsPerPage, processedData.length)} 条，共{' '}
          {processedData.length} 条记录
        </div>
        
        <div className="pagination-controls">
          {/* 第一页和上一页按钮 */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            « 第一页
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ‹ 上一页
          </button>
          
          {/* 页码按钮 */}
          {getVisiblePageNumbers().map(number => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          ))}
          
          {/* 下一页和最后一页按钮 */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            下一页 ›
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            最后一页 »
          </button>
        </div>
        
        {/* 页面跳转 */}
        <div className="page-jump">
          <span>跳转到: </span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={pageJumpInput}
            onChange={(e) => setPageJumpInput(e.target.value)}
            placeholder={`页码 (1-${totalPages})`}
            className="jump-input"
          />
          <button onClick={handlePageJump} className="jump-btn">
            跳转
          </button>
        </div>
      </div>
      
      {/* 功能说明 */}
      <div className="instructions">
        <h3>功能说明:</h3>
        <ul>
          <li><strong>排序:</strong> 点击表格标题进行升序/降序排序</li>
          <li><strong>搜索:</strong> 在搜索框中输入关键词，可搜索所有字段</li>
          <li><strong>分页:</strong> 使用分页控件浏览不同页的数据</li>
          <li><strong>跳转:</strong> 使用页面跳转功能快速跳转到指定页码</li>
          <li><strong>每页显示:</strong> 使用下拉菜单调整每页显示的数据条数</li>
        </ul>
      </div>
    </div>
  );
}
export default InverviewGrid;