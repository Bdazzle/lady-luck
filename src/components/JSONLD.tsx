
interface JSONLDProps {
    data : Record<string, any>
}

const JSONLD : React.FC<JSONLDProps> = ({data} ) =>{
    return(
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    )
}

export default JSONLD