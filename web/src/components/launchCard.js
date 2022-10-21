import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const LaunchCard = (props) => {
  
  if (!props.launch) return;
  
  const { launch } = props;
  
  return (
    <Card sx={{ display: "flex", maxWidth: 640, mt: 2, ml: "auto", mr: "auto" }}>
      {launch.patch && <CardMedia
        component="img"
        sx={{ width: 151, marginRight: 1, padding: 2 }}
        image={launch.patch}
        alt="Patch"
      />}
      <CardContent>
        <Typography variant="h5" component="div">
          {launch.name}
        </Typography>
        <Typography sx={{ mt: .5, mb: 1.5 }} color="text.secondary">
          {new Date(launch.date).toLocaleString('pt-BR')}
        </Typography>
      </CardContent>
    </Card>
  );
}
  
export default LaunchCard;