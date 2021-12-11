import { _Finder } from "../../../stl-cmp";
import iSearch from '../../../img/search.svg';
import { search } from "../../../redux/actions/actions";
import { useState } from "react";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import Order from "../order/Order";

const Finder = ({search}) => {
    const [value, setValue] = useState('')

    const searchChange = ({target: {name, value}})=>{
        (()=>{
            setValue(value)
        })()
        search(value)
    }

    return (
        <_Finder>
            <div className="blur">
            <form onSubmit={(e)=>{e.preventDefault()}} >
            <label>
					<div>
						<input id="finder" name='search' onChange={searchChange} type="text" value={value} placeholder="Buscar por raza...."/>
						<button>
                        🐩
						</button>
					</div>
				</label>
            </form>
            <Order/>
            <Filter/>
            </div>
        </_Finder>
    )
}

export default connect(null, {search})(Finder)
