import {  Input } from "antd";

function SearchBar(props){
    return (
        <div>
            <label>Search:</label>
            <Input onChange={props.handleSearch} style={{ width: 230, height: 30, margin: 10 }}/>
        </div>
    )
}

export default SearchBar;