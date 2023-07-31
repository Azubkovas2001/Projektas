import styled from 'styled-components'

export const StyledTable = styled.table`
 width: 100%;
 border-collapse: collapse;
`;

export const StyledTbody = styled.tbody`
 tr{
  background: rgb(246 248 250);
  border-bottom:0.1px solid gray;
 }
 td{
  padding:10px 0;
  text-align: left;
 }
`;

export const StyledThead = styled.thead`
 tr{
  background:rgb(246 248 250);
  color:black;
  font-size:20px;
  text-align:left;
  border-bottom:1px solid black;
 }
`

export const StyledDelButton = styled.button`
 width:80px;
 height:30px;
 font-weight:bold;
 background: #d32f2f;
 border-radius: 4px;
 cursor: pointer;
 font-size: 14px; 
 border:2px solid black;
 &:hover {
   background: darkred;
 }
`
export const StyledUpdButton = styled.button`
 width:80px;
 height:30px;
 font-weight:bold;
 background: rgb(138 140 141);
 border-radius: 4px;
 cursor: pointer;
 font-size: 14px; 
 border:2px solid black;
`
export const StyledDiv = styled.div`
padding:0 20px;
`