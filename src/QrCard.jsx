import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import frame from './assets/img/frame.png'

function QrCard() {
  return (
    <Card
      sx={{
        width: 350,
        textAlign: "center",
        margin: "0 auto",
        marginTop: 18,
        borderRadius: 5,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="BLACK" gutterBottom>
          DOGTRAINING
        </Typography>
        <Typography variant="body2">
          <img src={frame} alt="dogtraining" width={"200px"} />
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          Improve your knowledge to train with your Dog
        </Typography>
        <Typography variant="h6" color={'lightgray'}>
          Scan the QR code to visit Dogtrainig and contact with us taking
          lessons and learn skills to improve different problems with your dog
        </Typography>
      </CardContent>
    </Card>
  );
}

export default QrCard;
