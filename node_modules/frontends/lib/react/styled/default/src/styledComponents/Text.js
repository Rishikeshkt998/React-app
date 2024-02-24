import styled from "styled-components";

export const Text = styled.div(
  (props) => `
    display:${props.block ? "block" : ""};
   ${
     props.bc && props.theme.bc[props.bc]
       ? `background-color:${props.theme.bc[props.bc]}`
       : ""
   };
   color: ${
     props.clr && props.theme.clr[props.clr]
       ? props.theme.clr[props.clr]
       : "inherit"
   };
   font-family:${
     props.font && props.theme.font[props.font]
       ? props.theme.font[props.font]
       : "inherit"
   };
   font-size:${
     props.size && props.theme.size[props.size]
       ? props.theme.size[props.size]
       : "inherit"
   };
   ${props.ta ? ` text-align:${props.ta}` : ""};  
   ${props.wid ? `width:${props.wid}` : ""};  
   ${props.mar ? `margin:${props.mar}` : ""}; 
   ${props.pad ? `padding:${props.pad}` : ""};   
   ${props.pl ? `padding-left:${props.pl}` : ""};  
   ${props.pr ? `padding-right:${props.pr}` : ""};  
   ${props.pt ? `padding-top:${props.pt}` : ""};  
   ${props.pb ? `padding-bottom:${props.pb}` : ""};  
   ${props.ml ? `margin-left:${props.ml}` : ""};  
   ${props.mr ? `margin-right:${props.mr}` : ""};  
   ${props.mt ? `margin-top:${props.mt}` : ""};  
   ${props.mb ? `margin-bottom:${props.mb}` : ""};  
`
);
