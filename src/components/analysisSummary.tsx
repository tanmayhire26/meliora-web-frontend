const AnalysisSummary: React.FC<{data: string}> = ({data}) => {
    return (
        <div style={{width: '75%', border: '1px solid black', padding: '10px', marginLeft:'10%'}}>
            <h1>Analysis Summary</h1>
            <p>{data}</p>
        </div>
    )
}

export default AnalysisSummary;