export const ABOUT_QUERY = `*[_type == "about"]{ 
    _id, 
    name, 
    title, 
    summary, 
    description, 
    description2 
}`;

export const PRIMARY_SKILLS_QUERY = `*[_type == "skillset"]{primarySkills}`;

export const PORTFOLIO_QUERY = `*[_type == "portfolio"]{projects}`;
