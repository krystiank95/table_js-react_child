import React from 'react'

class Tabelka1 extends React.Component {
  constructor(props){
    super(props);
  }
    render()
    {
      return (
  <div>
    <table>
      <thead>
        <tr>
          <th>jeden</th>
           <th>dwa</th>
            <th>trzy</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>test1</td>
          <td>test2</td>
          <td>test3</td>
        </tr>
      </tbody>
    </table>
  </div>
      )
  }
  }


export default Tabelka1
