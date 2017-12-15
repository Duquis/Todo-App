import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols='12 9 10' > 
      <input type="description" className='form-control' 
        placeholder='Add a task'
        onChange={props.handleChange}
        value={props.description}/>
    </Grid>
    
    <Grid cols='12 3 2'>
      <IconButton style='primary' icon='plus' handleAdd={props.handleAdd}></IconButton >
    </Grid>
  </div>
)