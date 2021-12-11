import React, {useEffect} from 'react';
import { _ViewCans } from '../../stl-cmp';
import CardCan from './CardCan'
import { connect } from 'react-redux';
import {getCans, viewCan, getPages, activePage} from '../../redux/actions/actions'
import Pagination from './pagination/Pagination';
import Finder from './finder/Finder';

const ViewCans = ({cans, pag ,getCans , getPages, activePage}) => {

    useEffect(()=>{
        (async function (){
            return (await getCans());
            
        })()
    }, [getCans])

    useEffect(() => {
        getPages()
        activePage(0)
    }, [cans])


	return (
		<_ViewCans>
            <Finder/>
            <div className="Views">
                {
                   ( pag && pag.length!==0)?
                    
                        pag.map((e)=>{
                            return(
                                <CardCan
                                key={`item-${e.id.toString()}`}
                                id={e.id}
                                name={e.name}
                                picture={e.picture} 
                                temps={e.temps} 
                                weight={e.weight} 
                                height={e.height} 
                                yearsOfLife={e.yearsOfLife}
                                />
                            )
                        })
                    
                    :
                    <p key='nothing' >no hay perros para mostrar.</p>
                    
                }
            </div>
            <Pagination/>
		</_ViewCans>
	);
};

const mapStateToProps=(state)=>{
    return {
    ...state
    }
}



export default connect(mapStateToProps, {getCans, viewCan, getPages, activePage} )(ViewCans);
