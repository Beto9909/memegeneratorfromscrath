import React from 'react'
import '../styles/Meme.scss'

export default function Meme() {

    const [memes,setMemes] = React.useState({
        topText : "",
        bottomText : "",
        urlImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [memesArray,setMemesArray] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data=>setMemesArray(data.data.memes))
    },[])

    let change = (event) => {
        const {name,value} = event.target
        setMemes(prev=>{
            return(
                {
                    ...prev,
                    [name]:value
                }
            )
        }) 
    }

    // const click2 = () => {
    //     const random = Math.floor(Math.random() * memesArray.length)
    //     const newurl = memesArray[random].url
    //     setMemes(prev=>{
    //         return(
    //             {
    //                 ...prev,
    //                 urlImage: newurl
    //             }
    //         )
    //     })
    // }


    let newImage = () => {
        const randomnumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomnumber].url
        setMemes(prev=>{
            return(
                {
                    ...prev,
                    urlImage: url
                }
            )
        })
    }


  return (
    <> 
        <div className="container form my-3">

            <div className="row my-2">
                <div className="col-6">
                    <input 
                        type="text"
                        name='topText'
                        value={memes.topText}
                        placeholder="Please introduce top text"
                        onChange={change}
                        className="input"
                    />
                </div>

                <div className="col-6 ">
                    <input 
                        name='bottomText'
                        value={memes.bottomText}
                        placeholder="Plase introduce bottom text"
                        onChange={change}
                        type="text" 
                        className='input'
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <button className='submit' onClick={newImage}>
                        Change Meme
                    </button>
                </div>
            </div>
        </div>
        <div className="container text-center imgcont ">
            <img src={memes.urlImage} alt="Memes images" id='imagen' className='Images img-fluid'/>
            <h2 className='topText'>{memes.topText}</h2>
            <h2 className='bottomText'>{memes.bottomText}</h2>
        </div>
        
    </>
  )
}
