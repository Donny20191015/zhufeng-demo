import { useMemo, useState } from "react";
import { mockData } from "../assets/Service";

const InterviewGrid = () => {
    const [data, setDate] = useState(mockData);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({key: "id", direction: "asc"});
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageJumpInput, setPageJumpInput] = useState("");

    const handleSearch = (e) => {
        console.log("handleSearch: ", e.target.value);
        setSearchTerm(e.target.value);
    }

    const filteredData = useMemo(() => {
        
        console.log("filteredData->searchTerm: ", searchTerm);
        
        if (!searchTerm) return data;

        const filtered = data.filter((item) => {
            return Object.values(item).some((value) => {
               return String(value).toLowerCase().includes(searchTerm.toLowerCase());
            })
        })

        console.log("filteredData: ", filtered);
        return filtered;
    }, [data, searchTerm]);

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc"
        };
        setSortConfig({ key, direction });
    }

    const processedData = useMemo(() => {
        const sortableData = [...filteredData];

        if (sortConfig.key) {
            const sortedData = sortableData.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (typeof aValue === "string" && typeof bValue === "string") {
                    return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                }
                
                return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
            })

            console.log("processedData->sorted: ", sortedData);
            
            return sortedData;
        }

        console.log("processedData->sortable: ", sortableData);
        return sortableData;

    }, [filteredData, sortConfig]);

    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "asc" ? "↑" : "↓";
        }
    }

    const handleItemsPerPageChange = (e) => {
        console.log(e.target.value);
        setItemsPerPage(e.target.value);
        setCurrentPage(1);
    }

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        
        return processedData.slice(indexOfFirstItem, indexOfLastItem);
    }, [itemsPerPage, processedData, currentPage, pageJumpInput]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // setPageJumpInput("");
    }

    const totalPages = Math.ceil(processedData.length / itemsPerPage);
    // const getVisiblePageNumbers = () => {
    //     const pageNumbers = 

    //     return totalPages;
    // }
    const handlePageJump = () => {
        const pageNumber = Number(pageJumpInput);  
        const lastPage = Math.ceil(processedData.length / itemsPerPage);
        
        if (pageNumber >= 1 && pageNumber <= lastPage) {
            setCurrentPage(pageNumber);
            // setPageJumpInput("");
        } else {
            alert(`请输入1到${lastPage}之间的页码`);
        }
    }

    return (
        <div>
            <div className="controls">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="搜索员工..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
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
                    <th >
                        部门
                    </th>
                    <th >
                        薪资 
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

                            {item.department}
            
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

            <div className="pagination">
                <div className="pagination-info">
                    当前第 {currentPage} 页，
                    显示第 {(currentPage - 1) * itemsPerPage + 1} 到{' '}
                    {/* 当一页显示的总条数超过了实际能显示的总条数，则需要只显示实际总条数
                        比如：让一页显示20条，但是实际只有15条数据，那么就只能显示15条
                    */}
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
                {/* {getVisiblePageNumbers().map(number => (
                    <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                    >
                    {number}
                    </button>
                ))} */}
                
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
        </div>
    );
}
export default InterviewGrid;