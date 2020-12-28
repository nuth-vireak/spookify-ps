import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import SongCard from '../../components/Cards/SongCard';
import spookifyAPI from '../../api/spookify';
import useStyles from './styles';

const BrowsingPageSongs = () => {
  const classes = useStyles();

  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const { data } = await spookifyAPI.get('/songs');
      //TODO error handler
      setSongsData(data);
    };

    getSongs();
  }, []);

  return (
    <>
      <GridLayout>
        <Grid item xs={12}>
          <Typography className={classes.heading}>Songs</Typography>
        </Grid>
        {songsData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} md={6} lg={4}>
              <SongCard
                data={data}
                backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
              />
            </Grid>
          );
        })}
      </GridLayout>
    </>
  );
};

export default BrowsingPageSongs;
