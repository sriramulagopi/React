export const Pagination = function({pageNo,setPageNo}){
    const prev = function(){
        if(pageNo==1){
            return
        }
        setPageNo(pageNo-1);
    }
    const next = function(){
        if(pageNo===10){
            return
        }
        setPageNo(pageNo+1);
    }
    return <div className="pages">
        <span className="material-icons" onClick={prev} style={{color:pageNo===1?"red":"black"}}>chevron_left</span>
        <span>{pageNo}</span>
        <span className="material-icons" onClick={next} style={{color:pageNo===10?"red":"black"}}>chevron_right</span>
    </div>
}