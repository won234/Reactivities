import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivitiyDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";

const ActivityDetails = () => {
	const {activityStore} = useStore();
	const {selectedActivity: activity, loadActivity, loadingInitial} 
		= activityStore;
		
	const {id} = useParams<{id:string}>();
	
	useEffect(()=>{
		if (id) loadActivity(id);
	}, [id, loadActivity]);
	
	
	if(loadingInitial || !activity) return<LoadingComponent/>;//just for prevent type warning
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiyDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSideBar/>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);