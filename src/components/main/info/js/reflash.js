import styled from 'styled-components'

export const ContentBox = styled.div`
display: flex;
width: 100%;
margin-bottom: 2.1rem;
`
export const ContentLeft = styled.div`
width: 7.5rem;
height: 9.94rem;
border-radius: .2rem;
border: 1px solid #ebebeb;
position: relative;
overflow: hidden;
img {
    width: 100%;
    height: 100%;
}
`

export const ContentRight = styled.div`
margin-left: .9rem;
color: #232323;
padding-top: .28888rem;
flex: 1;
.data {
    color: #232323;
    font-size: .9rem;
    margin: 0
}
.title {
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.66rem;
    margin-top: .8888rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.location {
    color: #666; 
}
`

export const Title = styled.h3`
font-size: 1.25rem;
font-weight: 700;
color: #232323;
float: left;
padding-left: 0.94rem;
height: 1.5rem;
line-height: 1.5rem;
margin: 0;
margin-bottom: 1.25rem;
`