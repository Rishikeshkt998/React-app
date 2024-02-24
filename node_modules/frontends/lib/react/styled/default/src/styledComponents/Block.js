import styled from "styled-components";

export const Block = styled.div(
  (props) => `
    display: flex;
    flex-basis: auto;
    ${props.flex ? `flex:${props.flex}` : ""}; 
    ${props.col ? `flex-direction: column` : ""}; 
    ${props.wrp ? `flex-wrap: wrap` : ""}; 
    ${props.jc ? `justify-content:${props.jc}` : ""}; 
    ${props.ai ? `align-items:${props.ai}` : ""}; 
    ${
      props.clr && props.theme.clr[props.clr]
        ? `color:${props.theme.clr[props.clr]}`
        : ""
    };
    ${
      props.font && props.theme.font[props.font]
        ? `font-family: ${props.theme.font[props.font]}`
        : ""
    };
    ${
      props.size && props.theme.size[props.size]
        ? `font-size:${props.theme.size[props.size]}`
        : ""
    };
    ${
      props.bc && props.theme.bc[props.bc]
        ? `background-color:${props.theme.bc[props.bc]}`
        : ""
    };
    ${props.hei ? `height:${props.hei}` : ""}; 
    ${props.wid ? `width:${props.wid}` : ""};   
    ${
      props.minH || props.mnxH ? `  min-height:${props.minH || props.mnxH}` : ""
    };
    ${
      props.maxH || props.mnxH ? `  max-height:${props.maxH || props.mnxH}` : ""
    };  
    ${
      props.minW || props.mnxW ? `  min-width:${props.minW || props.mnxW}` : ""
    };  
    ${
      props.maxW || props.mnxW ? `  max-width:${props.maxW || props.mnxW}` : ""
    };  
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
