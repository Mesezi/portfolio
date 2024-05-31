import client from "./client";


export async function getMyDetails() {
	try {
		const res = await client.fetch(`*[_type == "about"]{
            desc, email, githubLink, twitterLink, linkedinLink,
			"image":{
              "url":image.asset->url,
            }
          }`);
		return res[0];
	} catch (err) {
		return [];
	}
}

export async function getProjects() {
	try {
		const res = await client.fetch(`*[_type == "project"]{
            desc, githubLink, liveLink, title, stack,
			"image":{
              "url":image.asset->url,
            }
          }`);
		return res;
	} catch (err) {
		return [];
	}
}



