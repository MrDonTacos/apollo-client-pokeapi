import React, {useEffect, useState} from "react"
import {options} from './styles/pagination-options.module.css'
import {Select, MenuItem, ToggleButton ,ToggleButtonGroup} from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';


const PaginationOptions = ({total, offset, handleEventOffSet, limit, handleEventPageSize, handleEventLayout, view}) => {
    const [pagination, setPagination] = useState()

    const numberCards = [10, 20, 30, 40]
    useEffect(() => {
        let offSetList = [];
        let numberPages = total / limit

        for(let i = 0; i < numberPages; i++){
            offSetList.push({text: `Page ${i + 1}`, value: i*limit})
        }
        setPagination(offSetList)
    }, [total, limit])

    return (
        <div className={options}>
            <div> 
                <Select
                  variant="filled"
                  labelId="offset-select-label"
                  id="offset"
                  value={offset}
                  label="page"
                  onChange={handleEventOffSet}
                  >
                    {pagination?.map((data) => <MenuItem key={data.value} value={data.value}>{data.text}</MenuItem>)}
                </Select>
                <Select
                  variant="filled"
                  labelId="number-page-select-label"
                  id="number-page"
                  value={limit}
                  label="Cards"
                  onChange={handleEventPageSize}
                  >
                    {numberCards.map((data) => <MenuItem key={data} value={data}>{data} Cards</MenuItem>)}
                </Select>
            </div>
            <div>
                <ToggleButtonGroup
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleEventLayout}>
                    <ToggleButton value="list" aria-label="list">
                      <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                      <ViewModuleIcon />
                    </ToggleButton>
                    <ToggleButton value="quilt" aria-label="quilt">
                      <ViewQuiltIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export default PaginationOptions