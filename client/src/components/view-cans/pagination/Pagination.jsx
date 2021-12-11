import { useEffect } from "react"
import { connect } from "react-redux"
import { activePage } from "../../../redux/actions/actions"
import { _Pagination } from "../../../stl-cmp"
const Pagination = ({pagination, activePage}) => {
    const activeButton= () => {
        document.querySelectorAll('button').forEach(e=>{
            e.classList.remove('active');
        })
    }
    const ChangePag=(e)=>{activePage(e.target.value); activeButton() ; e.target.classList.add('active')}
    return (
        <_Pagination>
            {pagination.map((e, i)=>{
                return <button onClick={ChangePag} className={i===0?'active':''} key={i.toString()} value={i}>{i<9?`0${i+1}`: i+1}</button>
            })}
        </_Pagination>
    )
}

const mapStateToProps=({pagination})=>({pagination})

export default connect(mapStateToProps, {activePage})(Pagination)
