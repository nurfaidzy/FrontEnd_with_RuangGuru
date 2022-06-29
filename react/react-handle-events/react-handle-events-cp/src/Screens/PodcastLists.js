import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import PodcastFormModal from "../components/PodcastFormModal";
import Header from "../components/Header";
import PodcastListItem from "../components/PodcastListItem";
import Constants from "../Constants";

const PodcastLists = () => {
  const [podcastList, setPodcastList] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("ADD");
  const [podcastId, setPodcastId] = useState(0)

  const getPodcastListData = async () => {
    // TODO: answer here
    const response = await axios.get(Constants.API_URL);
    setPodcastList(response.data);
  };

  useEffect(() => {
    // TODO: answer here
    getPodcastListData();
  }, []);

  return (
    <div>
      <Header headerText={"My Top Podcasts"} />
      <div>
        <Button
          style={{ marginTop: 10, marginLeft: 10, alignSelf: "flex-end" }}
          variant="primary"
          onClick={() => {setFormModalType("UPDATE");setShowFormModal(true);}}
        >
          + Add Podcasts
        </Button>
        {podcastList.map((item) => {
          // TODO: answer here
          return (
            <PodcastListItem
              key={item.id}
              id={item.id}
              podcastItem={item}
              setFormModalType={setFormModalType}
              setShowFormModal={setShowFormModal}
              setPodcastId={setPodcastId}
            />
          );

        })}
      </div>
      <PodcastFormModal
        podcastList={podcastList}
        setPodcastList={setPodcastList}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        setFormModalType={setFormModalType}
        formModalType={formModalType}
        podcastId={podcastId}
      />
    </div>
  );
};

export default PodcastLists;