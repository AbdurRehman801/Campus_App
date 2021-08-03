import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        })
    }, [])
    return (
        <div>
            {
                loading ?
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <RingLoader color={'#3F064B'} loading={loading} size={20} style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100vh"
                        }} />
                    </div>
                    :
                    <h1></h1>
            }
        </div>
    )


}
export default Loader;