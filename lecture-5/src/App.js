import React from 'react';

import Table from './components/Table'
import data from './assets/data.json'

function App() {
	console.log(data)

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			type: 'string'
		},
		{
			title: 'Speaker',
			dataIndex: 'main_speaker',
			key: 'main_speaker',
			type: 'string'
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			type: 'string'
		},
		{
			title: 'Views',
			dataIndex: 'views',
			key: 'views',
			type: 'string'
		},
		{
			title: 'Tags',
			dataIndex: 'tags',
			key: 'tags',
			type: 'tag'
		},
		{
			title: 'Date',
			dataIndex: 'published_date',
			key: 'published_date',
			type: 'date'
		},
	]

	/*
	comments: 4553
description: "Sir Ken Robinson makes an entertaining and profoundly moving case for creating an education system that nurtures (rather than undermines) creativity."
duration: 1164
event: "TED2006"
film_date: 1140825600
languages: 60
main_speaker: "Ken Robinson"
name: "Ken Robinson: Do schools kill creativity?"
num_speaker: 1
published_date: 1151367060
ratings: "[{'id': 7, 'name': 'Funny', 'count': 19645}, {'id': 1, 'name': 'Beautiful', 'count': 4573}, {'id': 9, 'name': 'Ingenious', 'count': 6073}, {'id': 3, 'name': 'Courageous', 'count': 3253}, {'id': 11, 'name': 'Longwinded', 'count': 387}, {'id': 2, 'name': 'Confusing', 'count': 242}, {'id': 8, 'name': 'Informative', 'count': 7346}, {'id': 22, 'name': 'Fascinating', 'count': 10581}, {'id': 21, 'name': 'Unconvincing', 'count': 300}, {'id': 24, 'name': 'Persuasive', 'count': 10704}, {'id': 23, 'name': 'Jaw-dropping', 'count': 4439}, {'id': 25, 'name': 'OK', 'count': 1174}, {'id': 26, 'name': 'Obnoxious', 'count': 209}, {'id': 10, 'name': 'Inspiring', 'count': 24924}]"
related_talks: "[{'id': 865, 'hero': 'https://pe.tedcdn.com/images/ted/172559_800x600.jpg', 'speaker': 'Ken Robinson', 'title': 'Bring on the learning revolution!', 'duration': 1008, 'slug': 'sir_ken_robinson_bring_on_the_revolution', 'viewed_count': 7266103}, {'id': 1738, 'hero': 'https://pe.tedcdn.com/images/ted/de98b161ad1434910ff4b56c89de71af04b8b873_1600x1200.jpg', 'speaker': 'Ken Robinson', 'title': "How to escape education's death valley", 'duration': 1151, 'slug': 'ken_robinson_how_to_escape_education_s_death_valley', 'viewed_count': 6657572}, {'id': 2276, 'hero': 'https://pe.tedcdn.com/images/ted/3821f3728e0b755c7b9aea2e69cc093eca41abe1_2880x1620.jpg', 'speaker': 'Linda Cliatt-Wayman', 'title': 'How to fix a broken school? Lead fearlessly, love hard', 'duration': 1027, 'slug': 'linda_cliatt_wayman_how_to_fix_a_broken_school_lead_fearlessly_love_hard', 'viewed_count': 1617101}, {'id': 892, 'hero': 'https://pe.tedcdn.com/images/ted/e79958940573cc610ccb583619a54866c41ef303_2880x1620.jpg', 'speaker': 'Charles Leadbeater', 'title': 'Education innovation in the slums', 'duration': 1138, 'slug': 'charles_leadbeater_on_education', 'viewed_count': 772296}, {'id': 1232, 'hero': 'https://pe.tedcdn.com/images/ted/0e3e4e92d5ee8ae0e43962d447d3f790b31099b8_800x600.jpg', 'speaker': 'Geoff Mulgan', 'title': 'A short intro to the Studio School', 'duration': 376, 'slug': 'geoff_mulgan_a_short_intro_to_the_studio_school', 'viewed_count': 667971}, {'id': 2616, 'hero': 'https://pe.tedcdn.com/images/ted/71cde5a6fa6c717488fb55eff9eef939a9241761_2880x1620.jpg', 'speaker': 'Kandice Sumner', 'title': "How America's public schools keep kids in poverty", 'duration': 830, 'slug': 'kandice_sumner_how_america_s_public_schools_keep_kids_in_poverty', 'viewed_count': 1181333}]"
speaker_occupation: "Author/educator"
tags: "['children', 'creativity', 'culture', 'dance', 'education', 'parenting', 'teaching']"
title: "Do schools kill creativity?"
url: "https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity"
views: 47227110
	 */



  return (
    <div className="App">
			<Table
				columns={columns}
				data={data}
			/>
    </div>
  );
}

export default App;
