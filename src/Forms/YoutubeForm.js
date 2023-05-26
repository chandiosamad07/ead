import React from 'react'

function YoutubeForm() {
  return (
    <div>
        <form>
            <label> Name </label>
            <input type='text' id='name' name='name'></input>

            <label>Email</label>
            <input type='email' id='email' name='email'></input>
            
            <label>Channel</label>
            <input type='text' id='channel' name='chaneel'></input>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
