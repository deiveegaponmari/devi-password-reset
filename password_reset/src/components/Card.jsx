export default function Card({children}){
    return(
        <div className="card">
            <div className="card-body" style={{width:"25rem"}}>
                {children}
            </div>
        </div>
    )
}