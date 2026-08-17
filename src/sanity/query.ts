import client from "./client";

export async function getMyDetails() {
  try {
    const res = await client.fetch(`*[_type == "about"]{
      tagline,
      desc,
      aboutExpansion,
      currentlyExploring,
      email,
      githubLink,
      twitterLink,
      linkedinLink,
      "image": {
        "url": image.asset->url
      }
    }`);
    return res[0];
  } catch (err) {
    return [];
  }
}

export async function getProjects() {
  try {
    const res = await client.fetch(`*[_type == "project"] | order(order asc) {
      title,
      order,
      desc,
      roleClarity,
      githubLink,
      liveLink,
      stack,
      "image": {
        "url": image.asset->url
      },
      hasCaseStudy,
      problem,
      role,
      keyDecisions,
      outcome,
      retrospective
    }`);
    return res;
  } catch (err) {
    return [];
  }
}
