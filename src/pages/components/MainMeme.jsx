import { useEffect, useState } from "react"

export default function MainMeme() {
    const[allMemes,setAllMemes] =useState([])
    const [meme,setMeme] = useState({
        topText: "not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });
    
    function getMemeImage() {
        const randomUser = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomUser].url
        setMeme(prev=>({
            ...prev,
            imageUrl: newMemeUrl
        }))
    }

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMemes(data.data.memes))
    },[])

    function handleChange(event) {
        const {value,name} = event.currentTarget
        setMeme(prev=> {
           return{ ...prev,
            [name]: value,
        }
            
        })
    }
    return (
        <main>
            <div className="formMeme">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}