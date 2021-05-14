import React from "react"
import { Element } from "react-scroll"
import { Modal, Button } from "antd"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
// import MailChimpSignUp from "../components/mailchimp-sign-up"

const candidates = [
  {
    name: "Alec Hudson",
    bio: (
      <>
        <p>
            I have been a DSA member since 2010 and a member of this chapter since 2014. I am a Chicago Park District worker in Special Recreation working with adults and kids with developmental disabilities, and I’m a proud member of SEIU Local 73. I have been heartened to see the development of this chapter expand with the multitude of projects and campaigns, all while we continue to debate strategy and tactics as to how to build the movement for the working-class. My work very much informs my vision of this chapter and this organization nationally, as working in Special Recreation is a job in helping to create an empowering community for athletes with disabilities while building a union in a vital city service primarily staffed by Black and Brown working-class people with a diversity of political views. As a CDSA member I’ve been involved in various aspects of chapter works from electoral campaigns such as being a 2019 precinct captain for Carlos Rosa’s re-election and helping organize West Side Bernie 2020 canvasses, Labor Branch, Red Rabbits, and Rose Buddies.
        </p>
        <p>
            In my view, I want to continue developing DSA as the organization to create a nucleus of  a party for the working-class. Being a member of the Bread &amp; Roses caucus has informed my thinking and political development in understanding, with the strategizing of elections through a class-struggle lens, critically engaging what it means to be a part of a rank-and-file led labor movement, and tying anti-oppression politics including abolitionism, the struggle against white supremacy, feminism, indigenous empowerment, and queer empowerment to mass-movement struggles.  
        </p>
        <p>
            Concretely, this means as a delegate that my focus will be around strengthening our electoral strategy, renewing our commitment to the rank-and-file strategy, and supporting the proposal to make reparations for Black people in the United States become a national priority. Beyond these efforts I also intend to strengthen our international solidarity work as well. I am especially excited by the proposal for the organization to join the Sao Paulo Forum, which would align us with left-wing Latin American political parties throughout our hemisphere. But beyond such affiliation it is my belief that DSA must engage in a project to combine abolitionism with anti-imperialism, extending efforts to defund the police to our military systems that empower our militarized police.
        </p>
        <p>
            I look forward to the continued growth of the working-class movement and the development of our political organization. DSA has shown me what a future based on solidarity looks like, and I am full of hope and love in building that future with you all. 
        </p>
      </>
    ),
  },
  {
    name: "Anthony Quezada",
    bio: (
      <>
        <p>
            Dear comrades,
        </p>
        <p>
            I am seeking to serve as a delegate of our Chicago DSA chapter to our 2021 National Convention to build a powerful DSA and continue growing our socialist movement in the United States. In the midst of historic crisis and potential for transformational change, we need to build a focused, militant, and effective mass socialist organization for the working class of our country.
        </p>
        <p>
            I have served on our Executive Committee since 2018 and have been a grassroots organizer in the 35th Ward since 2016. I was able to serve as a delegate at our 2019 National Convention, and I am running as a 2021 delegate as a member of the Bread &amp; Roses Caucus.
        </p>
        <p>
            I am hoping to advocate for resolutions that will push DSA into becoming a sophisticated and critical organization that can coordinate an effective national strategy, while also learning how to develop and organize powerful local campaigns (both issue based and electoral).
        </p>
        <p>
            As an organizer for successful leftist electoral campaigns, and as someone who has worked with our comrade Alderman Carlos Rosa, I know firsthand the potential for socialists in office. That is why I am excited to support the resolution Toward a Mass Working Class Party&mdash;A resolution to turn DSA into a party-like electoral apparatus that can identify and run DSA organizers across the country who can use their offices to root class struggle politics.
        </p>
        <p>
            We need to replicate the success and power of our political project in Chicago across the country a thousand times over.
        </p>
        <p>
            I am also excited to support the resolution toward Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023 - This a comprehensive labor resolution that has a perspective of the importance of rank and file power and union democracy throughout. The COVID-19 pandemic has forced workers into the worst and unsafe working conditions in over a century. We need a political strategy to organize workers and create a militant working class.
        </p>
        <p>
            Within the resolutions that will be voted and debated on, I will argue from a political perspective that is rooted in the conditions that I witness and experience in my community: poverty, police violence, homelessness, and racism and xenophobia towards immigrants. I believe that the
most impacted of our society serve a key role in leading a successful revolutionary movement in our country.
        </p>
        <p>
            Last but not least, I am looking forward to meeting and learning from our comrades across the country. We have all learned so much in the past year and have grown as political leaders, thinkers, and fighters. The National Convention is a time for our organization to deepen its solidarity to one another and its resolve for a socialist world.
        </p>
        <p>
            I look forward to answering your questions at our candidate forum.
        </p>
      </>
    ),
  },
  {
    name: "Emilie Shireman",
    bio: (
      <>
        <p>
            My name is Emilie and I would be honored to receive your vote and represent Chicago DSA at the 2021 convention. I have been a CDSA member since mid 2018 and currently serve on the steering committees of the North Side Blue Line and Labor Branches, and I am a co-chair of the New Member Orientations and Emergency Workplace Organizing Committee (EWOC) subcommittees. One of my first experiences in CDSA was with strike support&mdash;the Unite HERE hotel workers, the Chicago Symphony Orchestra, UIC grad students, and the CPS strike in 2019&mdash;and these experiences changed the way I believe we will win socialism.
        </p>
        <p>
            A bottom-up, worker-led mass movement that can act collectively can extract demands from the ruling class in the same way CTU and the hotel workers were able to do when they shut down the city by going on strike. What we need to do now, as the largest socialist organization in the country, is to develop a militant working class that can see themselves as a group separate from the capitalist class that can actually change the world for the better. This takes a lot of work, and many conversations with neighbors and co-workers. What made these strikes successful was their constant internal organizing: listening to co-workers’ concerns, finding out what they think the causes of their problems are, and lifting them up and showing them that they have the right to demand changes in their workplace, and then all acting as one to get those demands met.
        </p>
        <p>
            The vast majority of the working class is not politically activated&mdash;they see no benefit in engaging with politics, and rightly so, because it rarely offers them anything. Reaching these people won’t be easy but it is necessary to build a mass movement. The events that have caught the most national attention are our workplace and electoral wins, and the way to make more of those is to reach out and show working people what a socialist vision is and what it can do.
        </p>
        <p>
            This orientation is what guides my work in organizing within and outside of DSA and is why I’m a member of the Bread &amp; Roses caucus, a marxist caucus of DSA members. The fact of organizing in DSA is that most of us are learning as we go. Very few of us have decades of experience in union organizing or running an electoral campaign. What I have learned in leadership at CDSA is that the benefit of being part of a national organization is that we can transfer knowledge and give support to winnable socialist projects elsewhere, building on our successes and helping us to prepare for the next fight. But to do this well, we need to operate in coordination. That’s what makes the national convention an opportunity to strengthen the national organization and build working class consciousness and power nationwide.
        </p>
      </>
    ),
  },
  {
    name: "JP Kaderbek",
    bio: (
      <>
        <p>
            My name is JP Kaderbek, I have been a member of Chicago DSA for about 10 years. In that time I’ve served on various local leadership bodies like the South Side Steering Committee, Executive Committee, and Labor Branch Steering Committee. Nationally I have been elected to the Labor Commission Steering Committee for two terms, and I’ve also been elected twice as delegate for the DSA National Convention, 2017 and 2019. For both Conventions I have worked with others to ensure that Chicago had a well-organized and informed delegation. In 2017, when DSA was growing faster than national DSA could accommodate I took the initiative to compile a guide to convention resolutions and NPC candidates, and also helped to organize a Robert’s Rules training for our delegation. In 2019 a much larger group of comrades took up the tasks of organizing discussions of resolutions, compiling spreadsheets, and organizing yet more Robert’s Rules trainings. The importance of this preparation can’t be overstated. Delegates are elected not to cast predetermined ballots but rather to make decisions and cast their votes amid a rapidly changing debate and on resolutions that will be amended sometimes multiple times. Once convention is underway it can be extremely difficult for even an experienced delegate to stay on top of the proceedings, or to understand the parliamentary maneuvers used to try to win a vote. In 2019 it was clear that we were one of the best prepared delegations, and towards the end of the convention many chapters were openly taking their cues from how the Chicago delegation in the center of the floor was voting. I was very proud of our chapter in 2019, and of my small role in helping us collectively prepare for it.
        </p>
        <p>
            I am also running for delegate as a member of the Bread &amp; Roses caucus. This means that I intend to go to convention specifically to champion certain resolutions and priorities. First, I will organize in support of resolutions that aim to root DSA more firmly in the working class. This
means support of the resolutions adopted by the national Electoral Committee and Labor Commission that will strengthen our labor and electoral priorities. I will also support other resolutions critical to rooting DSA in the working class by: 1) supporting the Growth and Development Committee’s “Beyond 100k” plan, 2) the resolution to strengthen YDSA, and 3) the resolution to form a National Committee for Reparations.
      </p>
      <p>
        I will also organize in favor of resolutions that strengthen the structure and internal democracy of DSA by 1) making the position of National Director elected by the convention, 2) by providing stipends to NPC Steering Committee members to make leadership more open to working people, 3) by setting up matching funds through national to assist chapters in hiring staff and opening offices.
      </p>
      <p>
        I’m running both to organize for these priorities and to help ensure our delegation is prepared to participate in the democratic process, even when we don’t vote in the same way.
      </p>
      </>
    ),
  },
  {
    name: "Lillian Osborne",
    bio: (
      <>
        <p>
            Dear comrades,
        </p>
        <p>
            I’m running for delegate as a member of the Bread &amp; Roses caucus slate because I want to see national DSA become more unified and effective at building working-class power, from the shop floor to the voting booth. This convention is about doing the hard work of building the kind of organization we need in an unprecedented political moment where we lack the unifying power of Bernie Sanders’s presidential campaigns.
        </p>
        <p>
            Over the past four years in DSA, I have coordinated new member orientations, been Field Director of Carlos Rosa’s re-election campaign, organized a city-wide coalition around Bernie’s 2020 run, and currently serve as a member of CDSA’s executive committee and the National Electoral Committee. These roles have shown me that though our organization continues to grow exponentially, nearing 100,000 members, the vast majority of members interact exclusively with their local chapters and have virtually no connection to national DSA. Chapters big and small lack the resources, national connections, and know-how to cohere as a truly national organization that is powerful enough to bring working people into the trenches to take on the capitalist class across the country.
        </p>
        <p>
            Three resolutions stand out to me as particularly important opportunities to make DSA stronger, both locally and nationally: Toward a Mass Working Class Party, Labor Strategy for DSA, and Matching Funds for Chapters to Hire Staff and Open Offices. These resolutions, supported across national political tendencies, will help us build the organization we need for the long haul.
        </p>
      </>
    ),
  },
  {
    name: "Melinda Bunnage",
    bio: (
      <>
        <p>
            I am running for delegate because I think that this is an important moment for our movement. After Bernie Sanders’ presidential loss, the devastating impact of Covid, and the uprisings after the murder of George Floyd, there are many questions about what our organization should focus on now. For these reasons and more, I believe that this year’s convention is an incredibly important one. As the largest socialist organization in the country, Democratic Socialists of America has a key role to play in setting the tone and the direction of left politics. I am eager to play my own small part in navigating these unknowns and building a mass national organization strong enough to defeat our class enemies.
        </p>
        <p>
            When I first joined CDSA in 2018, I was primarily active with the Lift the Ban campaign. I was a part of the effort to coordinate a series of ward-level referendums across different neighborhoods with the goal of demonstrating the mass demand for rent control and affordable housing in Chicago. After that, I worked on the committee that supported the City Council races in 2019. Now I am nearing the end of my second year as one of the Co-Chairs of this chapter. Over the years I have spent time working with the Political Education Committee, the Labor Branch, the Membership Engagement Committee, and the newly formed Socialist Caucus in City Council.
        </p>
        <p>
            I bring the perspective of a socialist deep in the trenches of the Chicago labor movement to all my work in DSA. Outside of CDSA I work for a public sector union in Chicago. In the last three years I’ve been a part of four strike campaigns across the city, including the 2019 Chicago Public Schools strike and the 2020 University of Illinois Chicago strike. No matter what is next for our organization, one thing that is certain is that socialists must strengthen our ties to unions and organized labor. The only way to do that is from the bottom up, through militant workplace fights led by rank and file leaders who are committed to taking power back, both on the job and in the community.
        </p>
        <p>
            That’s why I am very excited to vote on resolutions at the convention that encourage bottom up organizing, efficient internal coordination, and, most importantly, bold socialist demands. Some of the resolutions I look forward to supporting include <strong>Toward a Mass Working Class Party</strong>, <strong>Labor Strategy for DSA</strong>, and the <strong>Green New Deal Campaign priority resolution</strong>.
        </p>
      </>
    ),
  },
  {
    name: "Sandy Barnard",
    bio: (
      <>
        <p>
            Hi everyone, my name is Sandy, and I am running for delegate because I want to see DSA be a strong, militant, democratic organization from the chapter to the national level.
        </p>
        <p>
            I moved to Chicago during the pandemic, but before then I organized in East Bay DSA for 3 years, spending 2 years as co-chair of our electoral committee. Since moving to Chicago DSA, I sit on the steering committee of the Membership Engagement Committee, I serve on the Legislative Research Subcommittee, and I wrote a series of articles for Midwest Socialist called “Class Enemy of the Week.” Nationally, I serve on the 2021 Convention Planning Committee, I am a delegate to the national Housing Justice Commission, and I am coming up on my third year in a row chairing the annual YDSA Convention.
        </p>
        <p>
            I have been involved in DSA for 4 years over 2 chapters and national work because I believe we can decommodify our basic needs and democratize our economy, but we will need a mass organization of the working class to accomplish it. If elected delegate, I am especially excited to vote for “Towards A Mass Working Class Party” to turn DSA into a party-like apparatus and continue on our past electoral victories, and for “Building Worker Power to Win Democratic Socialism,” because building worker power should be central to all of our fights. To socialism!
        </p>
      </>
    ),
  },
  {
    name: "Sarah Zimmerman",
    bio: (
      <>
        <p>
            Building a strong socialist movement under a Biden presidency is our current challenge as an organization. As neoliberalism takes a temporary hiatus and with the labor movement (and the Left) weakened after years of attacks, many questions arise: How do we orient ourselves to coalition groups, some of which will be relieved by Biden’s friendly rhetoric towards the working class? How do we position ourselves concerning union leadership, its ties to capitalist political parties, and its tendency to bureaucratically manage class struggle? How do we prioritize electoral wins while navigating our relationship to electeds? How do we develop and engage our membership as we continue to recruit? And how do we get more involved in the fight against police violence and for Black Lives Matter, connecting the historical struggle against racism to both the workers’ and socialist movement?
        </p>
        <p>
            By serving as a delegate in the National Convention, I hope that I can play some small part in promoting resolutions and amendments that advance a theory of change rooted in class struggle and provide our organization with the concrete resources to take on this fight. I plan on supporting resolutions that promote member development and prepare us for the hard work and questions ahead. This is why I support resolutions and amendments that help strengthen our organization, including paying stipends to the NPC Steering Committee and provide matching funds for chapters to hire staff and open offices. We need active and engaged members over a long period so that tactical lessons and institutional history do not get lost. We need support to build capacity so that membership can feel engaged and connected to the work we do and more members can gain the skills, analysis, and confidence to lead our work. This is why I support the resolution to strengthen YDSA and the “Beyond 100K” resolution to build up chapters’ capacity for membership recruitment and engagement.
        </p>
        <p>
            And as a rank-and-file member of SEIU 73 and a Steering Committee member of our Chapter’s Labor Branch, I am excited to vote for the “Building Worker Power to Win Democratic Socialism” resolution put forward by the DSLC and to help determine how we might orient our Chapter to these national priorities. I also support the “Toward a Mass Working Class Party” resolution that can strengthen our foundation to build the independent working-class party we need to take power. As a member of the Bread &amp; Roses caucus, my political vision for socialism includes the state and the workplace as key sites of struggle for the working class to put forward and win demands. I look forward to being part of our Chapter’s growth, and if elected delegate, I will make sure to work with the Chicago delegation team to bring the Convention’s resolutions and amendments back into the Chapter for discussion and debate, as well as my understanding of their political vision and impact. Thank you for your consideration.
        </p>
      </>
    ),
  },
  {
    name: "Stephen Thompson",
    bio: (
      <>
        <p>
            Hello, comrades! I am very excited about the progress we have all made together in building DSA. Our commitment to outward-facing class-struggle politics has transformed the political landscape in the US, and made a socialist future feel like a real possibility. If elected to serve as a delegate at this year’s national convention, I will vote to support proposals that build on this progress.
        </p>
        <p>
            A little about me: I am relatively new to the Chicago chapter, but you might know me from my work facilitating small group discussions at Socialist Night School and the No Shortcuts Organizer School. As a member of the Political Education and Policy Committee, I also help with content development and phone banking. Before moving to Chicago, I was a member of Baltimore DSA, and was also active in my union, the Baltimore Teachers Union. As a rank-and-file activist, I organized with my co-workers against a draconian new evaluation policy that the school board was trying to implement, and was part of the effort by socialists across the country to have our unions endorse Bernie for the 2020 presidential election. Ultimately, my AFT local did not endorse Bernie, but the campaign helped us to build a core group of teacher activists within the union, who raised the profile of socialist politics and successfully pushed the city to provide more laptops for our students during the pandemic.
        </p>
        <p>
            I believe that because of my experience organizing in labor and socialist movements for the past several years, I can offer a useful perspective at the national convention. If elected as a delegate, my votes at the convention will always be informed by the fundamental Marxist principles that the emancipation of the working class must be accomplished by the working class itself, and that winning socialism will require mass, collective action. As a member of the Bread &amp; Roses caucus, I am committed to uniting DSA behind this political vision, while also maintaining good relationships with comrades of all perspectives and learning from different points of view. (You can read more about <ExternalLink href="https://breadandrosesdsa.org/where-we-stand/">Bread &amp; Roses</ExternalLink> here.)
        </p>
        <p>
            Finally, I’d like to mention a few convention resolutions that I’m especially excited about. I believe it is critical for workers to build their own political party, and also see tactical use of the Democratic Party ballot line as an important part of this project, which is why I’m proud to support the electoral priority resolution “Toward a Mass Party in the United States”. I also think it is essential for us to stand firmly against all forms of social oppression, and to build socialist anti-racist campaigns, which is why I support the resolution “Formation of a National Committee for Reparations to Black People.” And because I see rank-and-file labor organizing as key to the socialist project, I support “Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023.”
        </p>
      </>
    ),
  },
  {
    name: "Sveta Stoytcheva",
    bio: (
      <>
        <p>
            I’m running alongside my comrades in Bread &amp; Roses to represent our chapter at the 2021 DSA National Convention. I am really proud of the work our organization has done and see in it the seeds of a powerful mass organization that can be a political home for the working class as we fight for the world we deserve.
        </p>
        <p>
            I currently serve as the Political Education Coordinator for Chicago DSA, where I help lead our Socialist Night School and support our robust political education and policy work. I joined DSA in 2018 and got involved as a campaign volunteer for one of our socialist alders. Since then, I have organized with the Democratize ComEd campaign, served on our local DSA for Bernie Steering Committee, and helped launch Chicago DSA’s Defund CPD, Fund Our Communities campaign.
        </p>
        <p>
            If I am elected to represent our chapter as a convention delegate, here are some of the resolutions and priorities that I am committed to organizing for:
        </p>
        <p>
            I support the “Toward a Mass Working Class Party” and “Building Worker Power to Win Democratic Socialism” resolutions put forward by the National Electoral Committee and the Democratic Socialist Labor Commission. The state and the labor movement are crucial terrains if we’re serious about organizing for power and I believe these resolutions offer concrete ways for our organization to engage in these struggles while building up working class organization independent of the Democratic Party and union bureaucracies.  
        </p>
        <p>
            I also support resolutions for strategic national priority campaigns that orient our organization towards the masses of ordinary people, address specific harms that divide and disempower the working class, and bring all of us into solidarity and struggle.  In particular, I am excited to support resolutions that commit our organization to work toward winning reparations for Black people from the federal government, build a mass campaign for voting rights, and recommit us to the fight for an ecosocialist Green New Deal.
        </p>
        <p>
            To build power and win our demands, we need political leadership that is empowered to organize around our democratically determined priorities and we need to make sure that chapters and other bodies have adequate resources to carry out those priorities. That is why I support resolutions to elect DSA’s national director, pay stipends to the NPC Steering Committee, and provide matching funds for chapters to hire staff and open offices. I also support the resolution to strengthen YDSA and the “Beyond 100K” resolution to build up chapters’ capacity for membership recruitment and engagement. 
        </p>
        <p>
            I am also firmly committed to the understanding that the strength of DSA’s big tent is that it brings us together to share our perspectives, work through our disagreements, and move towards collective action. If elected, I look forward to engaging with the entire Chicago delegation to understand my comrades’ priorities and vision for DSA, respectfully articulate our political differences, and organize together around our shared goals.
        </p>
      </>
    ),
  },
  {
    name: "Tristan Bock-Hughes",
    bio: (
      <>
        <p>
            Comrades, my name is Tristan Bock-Hughes and I’m running for convention delegate to organize around a concrete plan for a powerful DSA that can be a mass organization of and for the multi-racial working class.
        </p>
        <p>
            When I was 18, I began organizing in Chicago with groups using direct action community organizing strategies focused on enacting abolitionist demands. A few years later I brought these beliefs and training into labor organizing. After a couple years organizing with nurses I joined the Bernie campaign and spent a year engaging in a class-struggle election. For the last year, I have worked as a staff organizer for the Emergency Workplace Organizing Committee supporting workers across the country taking action against their bosses. I have also sat as an elected member of the South Side SC of CDSA and helped launch the South Side Organizing Committee and Chicago Local EWOC Team. Both of these teams are focused on reaching beyond CDSA by building relationships through shared struggle.
        </p>
        <p>
            Over the last year, I have primarily focused on supporting organizers to invest in strong relationships, engage in shared struggle, and build robust internal democracy in their organizing so they can set clear priorities and organize people around them. This orientation is why I am a Bread &amp; Roses member. Bread &amp; Roses upholds rank-and-file unionism, unions democratically controlled and powered by activist membership, as key to a strong labor movement. We believe that DSA can encourage and support the mass action of working class people and sustain it through an independent mass workers’ party with the real power to push back against the boss parties of the Democrats and Republicans. I believe that if we want to enact true abolition, throw off the Democrats and Republicans, and build a working-class movement able to take mass-coordinated action that we must build a DSA that has priorities. Not priorities that preclude experimentation, but that allow us to focus the majority of energy, funds, and time on the core projects we democratically determine will build this movement.
        </p>
        <p>
            This is why I am excited to organize around the resolution “Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-23” which supports bottom-up efforts to transform the labor movement within unions, connects our comrades through industrial organizing networks, and supports the organizing of unorganized sectors of the working class. I am also excited to support the Resolution to Form a National Committee for Reparations to Black People to ensure DSA will help cohere working class organizing around a demand that will radically shift power to the multi-racial working class in our society. I think these goals will be more effectively accomplished if we also pass the resolutions to develop chapter level staff organization and offices, build transparent and democratic chapter-to-national organizing structures, and support YDSA’s growth into HBCUs and community colleges. I am excited to organize for this plan to build a powerful DSA!
        </p>
      </>
    ),
  },
  {
    name: "Waleeta Canon",
    bio: (
      <>
        <p>
            Comrades,
        </p>
        <p>
            Thank you for reading my delegate statement for this year’s national DSA convention. I’m running to represent Chicago DSA in order to bring the politics of mass organization, help to pass a resolution on reparations which I co-authored with fellow AfroSoc and Bread &amp; Roses caucus members, and vote on resolutions which make DSA a mass movement organization with a strong national structure and better supported chapters.
        </p>
        <p>
            I have been a DSA member for four years. In this time, I have held a variety of elected and non-elected roles, volunteered with campaigns, served on the Northside branch steering committee, helped organize and plan CDSA training/education events and campaigns, volunteered to canvas and text bank for Bernie as well as canvassed for our own aldermanic campaigns, joined strike lines and delivered food to students through Bread for Ed during the CTU strike, and like so many other members, I have engaged with night school and other political education classes and reading groups. I currently volunteer to serve on the Red Line Branch Mutual Aid Committee, where we’ve connected CDSA members with existing aid organizations in order to have organizing conversations in our communities while also helping to meet people’s needs.
        </p>
        <p>
            To be a multi-racial, working-class organization, we need to build a strong national DSA that can provide resources and tools for our chapters to help members hit the ground running on campaign work and political education. People who work multiple jobs, care for families, have children, work odd hours, and so on, should be able to join and lead in our chapter. I believe that only through mass action can the working class be truly liberated, because our power exercised together is the only power that can defeat the ruling class. A strong DSA that can punch above its weight politically needs a well-funded national organization that can support local chapters to engage in national campaigns as well as work on their own local programs. With nearly 100,000 members, political development and campaign work for members is integral. To my mind, this requires long and short term strategies with complementing tactics, which in turn requires DSA members to be politically developed and engaged, not just with each other, but in the places we organize. I plan to support various proposed resolutions that help make this a reality, including Toward a Mass Working Class Party, Labor Strategy for DSA, Matching Funds for Chapters to Hire Staff and Open Offices, the Green New Deal Campaign priority resolution, among many others that move us toward these goals.
        </p>
        <p>
            The democratic, member-led nature of DSA, with a focus on class struggle politics, can make us uniquely positioned to move people to agitate for their own liberation in ways other political organizations don’t or can’t. I believe we can win the world. Thank you!
        </p>
      </>
    ),
  },
  {
    name: "Will Bloom",
    bio: (
      <>
        <p>
            Hi comrades! My name is Will, and I’d be honored to represent our chapter at Convention this summer. I have been in DSA since 2016 and active in CDSA since 2017. The first two things I did in CDSA were becoming a member of the Labor Branch and becoming a mobilizing coordinator for the North Side Branch. In Labor Branch, I got involved in, among other things, our Strike and Solidarity work. From the 2018 hotel workers’ strike, to the charter schools strikes, to the 2019 CTU/SEIU 73 strike, and up through the near-strike over school reopening this February, I’ve worked on developing and carrying out CDSA’s work to support workers engaged in direct conflict with the ruling class. I’m particularly proud of our Bread for Ed program during the 2019 CTU strike, one of the biggest and most successful DSA mutual aid projects, which chapters across the country have sought to emulate. As mobilizing coordinator, first for the branch and then for the chapter, I helped develop our system of new member orientations and the first iteration of our Rose Buddies program. As Secretary, I’ve been able to support those carrying on that work and collaborate with a number of comrades to create the Member Engagement Committee, where we are improving on both of those programs and ensuring we are developing new members into socialist organizers across the chapter.
        </p>
        <p>
            I believe that we, the working class, can take on the ruling class, beat them, and replace capitalism with socialism. This is not an easy task. It will take a coherent working class, full of people who understand themselves as part of the class, who are committed to fighting for the whole class, and who are organized as a class, engaging in class struggle at a mass level. That’s the project of DSA: to cohere working-class people into a mass, multiracial, working-class socialist organization that has the power to actually win this fight. This vision is why I’m a member of the Bread &amp; Roses Caucus in DSA. We believe in organizing the working class to fight against the capitalists in the workplace, at the ballot box, and in the streets. We believe it is only through the mass, coordinated action of the working class against the ruling class that we can win.
        </p>
        <p>
            I’m excited for DSA to continue to pursue that kind of mass action vision, and plan to support resolutions at convention that move us in that direction. I strongly support, among others, the Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023, Towards a Mass Party in the United States, Resolution on Strengthening YDSA, Formation of a National Committee for Reparations to Black People, and the Ecosocialist Green New Deal Priority Resolutions. I believe these resolutions provide practical actions, supported by compelling political analysis, for how to build working-class power through labor, electoral, and strategic campaign work that can build the mass working-class organization we need.
        </p>
      </>
    ),
  },
]

class Candidates2020 extends React.Component {
  state = { visible: false, candidate: null, groupedCandidates: [] }

  componentDidMount() {
    this.setState({
      groupedCandidates: this.getGroupedCandidates(),
    })
  }

  showModal = candidate => {
    this.setState({
      visible: true,
      candidate: candidate,
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }

  images = () => this.props.data.allFile.edges.map(edge => edge.node)

  image = candidate => {
    const name = candidate.name
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/\./g, "")
    return this.images().find(image => image.name === name).childImageSharp
      .fluid
  }

  getGroupedCandidates = () => {
    const positions = []
    const groups = []
    candidates.forEach(candidate => {
      if (!positions.includes(candidate.position)) {
        positions.push(candidate.position)
        groups.push({ position: candidate.position, candidates: [] })
      }
      groups[groups.length - 1].candidates.push(candidate)
    })

    return groups
  }

  render() {
    return (
      <Layout
        title="2021 Convention Chicago Delegates"
        color="red"
        heroImageName="index"
        layoutClassName="home"
      >
        <SEO
          title="2021 DSA Convention Chicago Delegates and Platform"
          ogImage="home"
        />

        <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {this.state.groupedCandidates.map(group => (
              <div className="position" key={group.position}>
                {group.candidates.map((candidate, index) => (
                  <div
                    className="candidate-card"
                    onClick={() => this.showModal(candidate)}
                    onKeyPress={() => this.showModal(candidate)}
                    key={candidate.name}
                    role="button"
                    tabIndex={index}
                  >
                    <CandidatePhoto
                      img={this.image(candidate)}
                      alt={candidate.name}
                    />
                    <div className="candidate-card__content">
                      <h3>{candidate.name}</h3>
                      <Button>Read more&hellip;</Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <Element name="priorities" id="priorities">
            <h2>Important Dates</h2>
            <ul>
                <li><strong>Chicago DSA Candidate Forums:</strong> <ExternalLink href="https://teamup.com/event/show/id/SPuSZzpaJysE4DwUUTyFhLrGgegCwL">May 12 at 6 p.m.</ExternalLink> and <ExternalLink href="https://teamup.com/event/show/id/ok9HNbft3VMWB7tEHrqJLCjVQ31ipA">May 15 at noon</ExternalLink></li>
                <li><strong>Bread &amp; Roses Meet &amp; Greet:</strong> <ExternalLink href="https://bit.ly/bnr-meetup">May 16, 2-4 p.m. at Eckhart Park</ExternalLink></li>
                <li><strong>Voter Registration:</strong> ends May 18 (<ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfYP0i9oJ5itj3yu6LHg1_Iat0IpznUVc_qNDWuFdS-a3cu_Q/viewform">ongoing</ExternalLink>)</li>
                <li><strong>Voting on Delegates:</strong> May 23–28 (online)</li>
                <li><strong>2021 DSA Convention:</strong> August 1–8 (<ExternalLink href="https://convention2021.dsausa.org/">more info</ExternalLink>)</li>
            </ul>
            <h2>Introducing the B&amp;R Slate of National Convention Delegates for Chicago DSA</h2>

            <p>
                During the past five years, DSA members have elected socialists to Congress, helped organize the teacher strike wave, joined the mass mobilization against police killings, and brought a socialist political perspective to millions of people during the Bernie Sanders presidential campaigns. In the process, DSA has transformed from a small 5,000-member activist group to 90,000+-member mini-mass organization. We are running to be delegates to the national convention as part of the Bread &amp; Roses slate because we believe DSA can do much more over the next two years to build on this progress. We believe DSA should focus on the following core areas:
            </p>
            <ul>
            <li>
                <strong>Building roots in the multi-racial working class.</strong> DSA’s members are still largely a self-selected group, who are disproportionately white, and are underrepresented in the sectors of the economy where workers have the most leverage. To address this, we need to train more of our members to become organizers who can recruit from the multi-racial working class. That’s why we support the resolution <ExternalLink href="https://docs.google.com/document/d/1mfQkXDU2732CCiBp6ztp6GpyuGT9AXdzYQ0YeHWuCtI/edit">Beyond 100K: Building a Mass Socialist Organization</ExternalLink>. Recognizing the legacy of racist oppression in the US, and the need to build solidaristic anti-racist campaigns, we also support the <ExternalLink href="https://docs.google.com/document/d/1DJ39rmzUb8wYCyqwvk9RptrF-w5l79wUgUII-EbE93c/edit">Resolution to Form a National Committee for Reparations to Black People</ExternalLink>, which was co-authored by a member of our slate.
            </li>
            <li>
                <strong>Rank-and-file labor organizing.</strong> Socialism will not become a reality until there is an organized working class ready to fight for it. We believe DSA can make progress on this front by continuing its commitment to the rank-and-file strategy: developing and expanding a layer of socialist organizers in workplaces who fight the boss, push for union democracy, promote a socialist political perspective on the job, and grow the labor movement. That’s why we support the resolution <ExternalLink href="https://docs.google.com/document/d/1zf1PKeKlYXEsP8nSMsb0uHmqyCMinuRw1ofhDVnT6QA/edit">Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023</ExternalLink>.
            </li>
            <li>
                <strong>Class-struggle elections.</strong> By running campaigns to elect socialists to public office, we can help build our movements and promote an alternative to the billionaire-dominated political establishment. And in the long term, we are committed to building an organization that can take state power as part of the transition to socialism. That’s why we support the National Electoral Committee’s resolution <ExternalLink href="https://dsanec.github.io/resolution/">Toward a Mass Party in the United States</ExternalLink>.
            </li>
            <li>
                <strong>A strong and democratic national organization.</strong> DSA has a structure inherited from the days when it was still a small activist group. Today, to build a powerful mass organization that can take on and defeat the ruling class, we need to strengthen DSA and increase its level of internal democracy. That’s why we support a <ExternalLink href="https://docs.google.com/document/d/12J3OXOIXq6btqKT1BoTt2UCrMt6If8pTjZQAgl_miAg/edit">constitutional change to make DSA’s National Director an elected position</ExternalLink>, <ExternalLink href="https://docs.google.com/document/d/1i333Ci59kGzV-ivbSwOl8Pg_WoUH0yHugRV7eetzGGI/edit">stipends for NPC Steering Committee members</ExternalLink>, and the <ExternalLink href="https://docs.google.com/document/d/1hexVaR046oZF-RnBSijv2WMgN80WlCSONhep85uopus/edit">Resolution to Strengthen DSA From the Bottom Up Through National Matching Funds For Chapters to Hire Staff and Open Offices</ExternalLink>. 
            </li>
            </ul>
            <p>
                If you support these priorities, vote for the Bread &amp; Roses slate: Alec Hudson, Anthony Quezada, Emilie Shireman, JP Kaderbek, Lillian Osborne, Melinda Bunnage, Sandy Barnard, Sarah Zimmerman, Stephen Thompson, Sveta Stoytcheva, Tristan Bock-Hughes, Waleeta Canon, and Will Bloom.
            </p>
          </Element>
        </div>

        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {this.state.candidate && (
            <>
              <h2>
                {this.state.candidate.name}
              </h2>
              <h3>{this.state.candidate.position}</h3>
              <CandidatePhoto
                img={this.image(this.state.candidate)}
                alt={this.state.candidate.name}
              />
              {this.state.candidate.bio}
            </>
          )}
        </Modal>
      </Layout>
    )
  }
}

const CandidatePhoto = ({ img, alt }) => (
  <Img className="candidate-photo" fluid={img} alt={alt} />
)

export const query = graphql`
  query Convention2020HeadshotsQuery {
    allFile(filter: { absolutePath: { glob: "**/headshots/chicago-delegates-2021/*" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  }
`

export default Candidates2020
