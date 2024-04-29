import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <div id="form_div">
      <form action="" name="f1" id="f1">
      <label for="t1">Full Name</label><br/>
        <input type="text" id="t1"  size="30"/><br/><br/>
        <label for="n1">Mobile No.</label><br/>
        <input type="number" id="n1" size="30"/><br/><br/>
        <label for="a1">Age</label><br/>
        <input type="age" id="a1" size="30"/><br/><br/>
        
        <label for="mail">E-mail</label><br/>
        <input type="email" id="mail" size="30"/><br/><br/>
        <label for="individuals">Select No.of individuals</label> <br/>

        <select name="individuals" id="individuals">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select><br/><br/>
        <label for="bill">Total Bill</label> <br/>
        <input type="text" value="0" id="bill"/><br/><br/>

        <button type="submit" value="submit" class="s1"><Link to="">Submit</Link></button>
        <button type="reset" value="clear" class="s2">Clear</button>
      </form>
      </div>
    </>
  )
}

export default Signup
