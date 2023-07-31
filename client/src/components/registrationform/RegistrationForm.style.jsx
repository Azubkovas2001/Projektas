import styled from 'styled-components'

export const ModalContainer = styled.div`
 display: ${(props) => (props.visible ? "flex" : "none")};
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 justify-content: center;
 align-items: center;
 background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
 background: white;
 padding: 20px;
 border-radius: 8px;
`;

export const ModalButton = styled.button`
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
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 20px;
`