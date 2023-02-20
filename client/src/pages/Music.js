import React from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Container, Image } from "react-bootstrap";

function Music() {
  const { id } = useParams();

  const { data: music } = useQuery("musicCache", async () => {
    const response = await API.get("/music/" + id);
    console.log("ini response user", response);
    return response.data.data;
  });

  console.log("ini data response music by id", music);

  return (
    <>
      <AudioPlayer
        className="bg-dark text-white"
        autoPlay
        src={music?.attache}
        header={`${music?.artist.name} - ${music?.title}`}
      />
      <div style={{ backgroundColor: "#161616" }}>
        <Container>
          <div className="d-flex text-white align-items-end">
            <Image
              className="object-fit-cover rounded"
              src={music?.thumbnail}
            />
            <div>
              <div>SONG</div>
              <div style={{ fontSize: "50px" }} className="fw-bold">
                {music?.title}
              </div>
              <div>
                {music?.artist.name} | {music?.year}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Music;
