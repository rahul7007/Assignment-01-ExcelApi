import React, { Component } from "react";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import api from '../api'

var main = ''
class Read extends Component {
    state = { 
        cols:'',
        rows:''
     }
    fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
              console.log(resp);
            var wholeArray = JSON.parse(JSON.stringify(resp.rows))
            console.log(wholeArray)

            var obj = {};
            var p = 0
            var final=''
            for (var k = 0; k < wholeArray.length; k++) {
            for (var v = 0; v < wholeArray[0].length; v++){
                if(k<wholeArray.length-1){
                    obj[wholeArray[p][v]] = wholeArray[k+1][v]
                }
            }
            // console.log(obj)
            if(k<wholeArray.length-1){
                final = final + JSON.stringify(obj) + ','
            }

            }
            final = final.substring(0, final.length - 1);
            main = '[' + final + ']'
            main = JSON.parse(main)
            console.log(main)

            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
          }
        });           
      }
      saveToDatabase = () =>{
          console.log("main data", main)
          const payload = {main}
          console.log("WORKING")
          api.insertData(payload).then(res => {
              console.log(res)
          })
      }
    render() { 
        return ( 
            <>
                <h1>READ EXCEL</h1>
                <input type="file" onChange={this.fileHandler} style={{"padding":"10px"}} />
                
                {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> } 
                <button onClick={this.saveToDatabase}>INSERT</button>
            </>
         );
    }
}
 
export default Read;