'use client'
import React from 'react'
import styled from 'styled-components'

/* Grid.css */
const GridCont = styled.div`
  width: 100%;
  height: 80vw;
  display: grid;
  background-color: blue;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1px;
`

const GridItem = styled.div`
  background-color: pink; /* Line color */
  border: 1px solid #fff; /* Background color of the grid container */
  height: 100%; /* Make the lines cover the full height of the container */
`

const Grid = () => {
  const rows = 1 // Adjust the number of rows as needed
  const columns = 5 // Adjust the number of columns as needed
  return (
    <GridCont>
      {Array.from({ length: rows * columns }, (_, index) => (
        <GridItem key={index}></GridItem>
      ))}
    </GridCont>
  )
}

export default Grid
