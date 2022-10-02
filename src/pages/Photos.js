import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {

    const {allPhotos} = useContext(Context)
        
    const photos = allPhotos.map((photo, i) => 
        <Image key={photo.id} img={photo} className={getClass(i)}/>
        )

    return (
        <div className="forScreen">
            <main className="photos">
                {photos}
            </main>
        </div>
    )
}

export default Photos