import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => {
  return {
    item: {
      paddingRight: theme.spacing(),
      paddingLeft: theme.spacing(),
    },
    inputGroup: {
      display: 'block',
      width: '100%',
      padding: 5,
      '& > input': {
        marginLeft: 5,
      },
    },
  }
})
