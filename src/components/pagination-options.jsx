import React, {useEffect, useState} from "react"
import {options} from './styles/pagination-options.module.css'
import {Select, MenuItem, ToggleButton ,ToggleButtonGroup} from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';


const PaginationOptions = ({total, offset, handleEventOffSet, limit, handleEventPageSize}) => {
    const [pagination, setPagination] = useState()

    const numberCards = [10, 20, 30, 40]
    useEffect(() => {
        let numberPages = total / limit
        let offSetList = [];

        for(let i = 0; i < numberPages; i++){
            offSetList.push({text: `Página ${i + 1}`, value: i*limit})
        }
        setPagination(offSetList)
    })

    return (
        <div className={options}>
            <div>
                <Select
                  labelId="offset"
                  id="offsetId"
                  value={offset}
                  label="Página"
                  onChange={handleEventOffSet}
                  >
                    {pagination?.map((data) => <MenuItem key={data.value} value={data.value}>{data.text}</MenuItem>)}
                </Select>
                <Select
                  labelId="numberPage"
                  id="numberPageId"
                  value={limit}
                  label="Número de elementos por página"
                  onChange={handleEventPageSize}
                  >
                    {numberCards.map((data) => <MenuItem key={data} value={data}>{data}</MenuItem>)}
                </Select>
            </div>
            <div>
                <ToggleButtonGroup
                orientation="horizontal"
                value={1}
                exclusive
                onChange={(e) => {}}>
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