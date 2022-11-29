import React, {useState} from "react";

const Search = () => {

    const [search, setSearch] = useState("");

    const searcher = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-white">
                    <input className="form-control" type="text" placeholder="Search" value={search} onChange={searcher} />
                </div>
            </div>
        </div>
    );
}

export default Search;