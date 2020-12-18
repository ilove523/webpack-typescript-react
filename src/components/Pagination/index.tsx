import { createStyles, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Properties {
  count: number;
  perPage: number;
  page: number;
  handelPage: any;
}

export default function BasicPagination(properties: Properties): React.ReactElement {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(Math.ceil(properties.count / properties.perPage));
  }, [properties.count, properties.perPage]);

  return (
    <div className={classes.root}>
      <Pagination onChange={properties.handelPage} count={count} page={properties.page} color='standard' />
    </div>
  );
}
