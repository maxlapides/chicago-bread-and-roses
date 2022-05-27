import { Button, Modal } from "antd"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Element } from "react-scroll"
import ExternalLink from "../components/external-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import MailChimpSignUp from "../components/mailchimp-sign-up"

const candidates = [
  {
    name: "Emily Mikhail",
    position: "Chapter Co-chair",
    bio: (
      <>
        <p>
          My name is Emily Mikhail (she/they), and I am running for co-chair of Chicago DSA with the Mass Action Slate.
        </p>
        <p>
          I have been a member of the chapter since spring 2019 and have had many roles. I served as secretary and co-chair of the Environmental Justice Working Group, as communications co-chair of the Democratize ComEd Campaign, as a member of the executive committee on the North Side Red Line Branch, and as delegate to the 2021 national DSA convention. With the support of CDSA, I ran for and won a seat as a community representative on my local elementary school’s Local School Council (LSC). Beyond CDSA. I also helped start the 48th Ward Neighbors for Justice, an independent political organization (IPO) in the Edgewater and Andersonville neighborhoods, and served as a member of both the provisional steering committee and first elected steering committee. Professionally, I'm a social worker.
        </p>
        <p>
          My roles as both socialist and social worker continue to inform each other, especially in the pandemic. As a social worker, I am faced head-on with the injustices of a system structured to keep the working class down. Housing insecurity and homelessness, the lack of union jobs and good healthcare, the attack on reproductive rights, environmental racism, and white supremacy all oppress us by design, and only a mass socialist movement can overcome the power of the ruling class.
        </p>
        <p>
          Ecosocialist organizing is what first brought me to DSA and will continue to be a priority of mine. I believe that as a mass organization that prioritizes internal democracy, we can go beyond what climate NGOs have been able to accomplish and face climate change head-on. As co-chair, I will connect our work supporting rank-and-file labor organizing with focused and winnable campaigns.
        </p>
        <p>
          DSA is the largest socialist organization in the United States, and we are only growing. In the coming year, our chapter is positioned to reelect five socialists, expand the Socialist Caucus on City Council, and support militant unions in their contract negotiations and potential strikes. We’ve won over a dozen LSC seats, we’re poised to organize for the Worker’s Rights Amendment on the ballot this November, and our Labor Branch is successfully building worker committees and a jobs pipeline to bring more socialist union members into the coming contract fights. I see my role as co-chair as a supportive one. I want to use my time to bolster the good work happening across the chapter and bring new members into our Electoral Working Group, Labor Branch, Political Education Committee, and more.
        </p>
        <p>
          Ultimately, I want to grow our chapter and build our capacity to tackle larger fights. We can only do so, however, if we are organized and intentional about the work that we take on. I want to spend my time as co-chair building strong campaigns, branches, and working groups that can take on these external fights and engage thousands of our neighbors in struggle. If we can accomplish this in the next year, I see no limits as to what our working-class movement can win.
        </p>
      </>
    ),
  },
  {
    name: "Steve Weishampel",
    position: "Chapter Co-chair",
    bio: (
      <>
        <p>
          My name is Steve Weishampel (he/him), and I am running for co-chair of Chicago DSA with the Mass Action Slate. I currently represent the Blue Line Branch on the executive committee.
        </p>
        <p>
          CDSA is entering a year with immense opportunities to build working-class power with our labor and electoral work. We must energize and recommit our membership and working class of Chicago to meet these moments, and chapter leadership must prioritize building our organization through struggle. I want to be co-chair to lead CDSA in this exciting year, build our membership, develop our skills as socialist organizers, and win more power for the working class.
        </p>
        <p>
          We must first establish a citywide electoral presence to build on our success in 2019. I was co-chair of the Electoral Working Group in 2018 when we passed an endorsement process and prepared the chapter for the 2019 municipal elections. Since then, the chapter has made huge strides and has built the infrastructure to carry out a comprehensive electoral program with the power to defend our incumbents and expand our socialist caucus on the city council next year. It is critical that our leadership supports that work, and that will be one of my top priorities as co-chair of the chapter.
        </p>
        <p>
          Our country is experiencing a massive surge in union interest, including the Starbucks, School of the Art Institute, and Howard Brown Health unionization drives within our own city. Unions like CTU, SEIU 73, and the Teamsters are also entering contract negotiations, and we must prepare to support any possible strikes. In leading a union drive at my job, I’ve been responsible for building democratic structures and organizing the unorganized. I’ve had dozens of conversations with colleagues and acquaintances, learned their concerns, and have guided them to understand why organizing is necessary. As a chapter, we must prioritize labor organizing and consistently involve ourselves in supporting labor across the city.
        </p>
        <p>
          I want to prioritize electoral and labor struggles because they are the vehicles by which we can win other demands. A militant labor movement led by socialists can apply pressure on institutions to win against the right—more pressure than we can exert otherwise. Elected officials can advance our demands through legislation and budgeting, use their platforms to amplify our demands, and provide a highly visible alternative to neoliberal austerity. Class-struggle electoral campaigns can agitate the working class by presenting a vision of a better world and force capitalist politicians to defend the present system. I don’t believe we can defeat privatization, white supremacy, patriarchy, corporate power, or any of our other enemies without labor power and an electoral presence.
        </p>
        <p>
          I’m running on the Mass Action slate because we share a vision of rank-and-file labor power, class struggle at the ballot box, and mass organization. I think CDSA’s greatest danger in 2022–2023 is failing to rise to the opportunities ahead of us. I hope members will elect our slate to join us to help our chapter rise to meet the moment.
        </p>
      </>
    ),
  },
  {
    name: "Leonard Pierce",
    position: "Political Education Coordinator",
    bio: (
      <>
        <p>
          My name is Leonard Pierce (he/him), and I am running for Political Education Coordinator with the Mass Action Slate.
        </p>
        <p>
          I have been a member of the chapter since fall of 2015, and I have worn many hats. I was co-chair of the chapter from 2017–2019, a delegate (and chapter delegate chair) for the DSA national convention in 2017 and 2019, a member of the steering committee of the North Side Branch in 2019 and the North Side Blue Line Branch in 2020, and the chair of the Rapid Response working group from 2016–2018. I helped organize the 2017 convention in Chicago, I was part of planning the last two Debs Dinners, I was on the Labor Working Group prior to its becoming a branch, and I have written for Midwest Socialist and edited the Red Star Bulletin. Nationally, I’ve worked with the Red Rabbits, helped edit Democratic Left, and have worked with eight chapters in the Midwest as part of the national Mentorship Subcommittee. Outside of DSA, I have been an anti-war activist, a union organizer, a member of a black bloc cell that traveled to Seattle in 1999, a participant in Occupy San Antonio, a campaign volunteer for several socialist elected officials, and a contributor to anti-fascist actions dating back to the 1980s.
        </p>
        <p>
          I was raised in the working class, the son of a glazier and an aerospace worker, and was brought up to support unions. Professionally, I work as a writer, editor, and proofreader, but I have also worked on a taco truck, been a bartender, and taken whatever other odd jobs I could find to make ends meet. My personal history, which includes bouts of homelessness, food insecurity, and jail time, have shown me first-hand the rough edges of life under capitalism. The lessons that I learned from on-the-job exploitation, injury, and economic uncertainty put me on the path to socialism and seeing the collapse of the Soviet Union, the decay of the already-fragile welfare state under neoliberalism, and one economic collapse after another has only further convinced me that our choice is socialism or barbarism.
        </p>
        <p>
          I learned from both my life experience as a worker and my self-guided readings in socialist theory, as well as from the generous and thorough mentorship I have received from other people in my life, most especially my comrades in DSA. As Political Education Coordinator, I hope to build on our excellent already-existing Socialist Night School, as well as finding new venues to spread our message to the dynamic multi-racial working class of this magnificent city, and most of all, to find ways of channeling new and existing members through political education and leadership development into outward-facing campaigns that can make a material difference in the lives of our fellow Chicagoans in the difficult times to come. The best theory is what we put into practice, and the best ideas will always come from those we activate into service of the people.
        </p>
      </>
    ),
  },
  {
    name: "Sean Estelle",
    position: "Campaigns Coordinator",
    bio: (
      <>
        <p>
          My name is Sean Estelle, my pronouns are they/them, I live in Bridgeport in the South Side Branch, and I’m running for campaigns coordinator with the Mass Action Slate.
        </p>
        <p>
          I believe that specific, issue-based campaigns for reforms that improve peoples’ material conditions can be an avenue for working-class people to build our organization by accomplishing goals laid out in our Chapter Campaigns Criteria, which were passed during my time serving on the executive committee of Chicago DSA in 2018. When we wrote those parameters, we envisioned that all campaigns would have clear benchmarks. I worked with leaders in the Environmental Justice Working Group to create a priority campaign proposal to Democratize ComEd, focused on using the narrow window of opportunity to create demands that would call for bringing the corrupt, private, investor-owned utility under public ownership.
        </p>
        <p>
          When I am elected campaigns coordinator, I plan to work with campaign leaders and the entire organizational membership to identify strategic goals where they haven’t been identified, and execute win/loss conditions where they have already been formulated. Campaigns with clear goals bring more people into struggle and can engage all parts of the chapter. It is crucial that every campaign have an agreed-upon theory of change and plan to win that guide their fights.
        </p>
        <p>
          In 2019, I was elected to the National Political Committee of DSA, the body responsible for carrying out decisions made by elected convention delegates. During my two years in that role, I worked on internal and external organizing campaigns developing the skills and class consciousness of members across the country while also working to guide the organization through a period of unprecedented political crisis. One of the pieces of work I’m most proud of during that time was developing a five-year strategy for the Green New Deal Priority campaign with both new and experienced organizers and participation from many chapters. As campaigns coordinator, I plan to build on efforts like Organizer School, the Cross-Campaign Retreats, and other organization-building tactics that will connect to campaign strategy skill-building.
        </p>
        <p>
          I also plan to dedicate time to reinforcing the ways that campaign tactics are connected to other pieces of the organization. By strengthening our strike support, contract fights, the jobs pipeline, and other ongoing work within the Labor Branch, we can identify new leaders that can root campaign work more deeply in the multiracial working class through their unions. The same goes for the Electoral Working Group and the victories of 16 Local School Council candidates, the Political Education Committee and its work to build the class consciousness of our members, and so on.
        </p>
        <p>
          The next year promises to be one full of challenges and exciting opportunities to build Chicago DSA and the power of the working class. As campaigns coordinator, I plan to work with new and existing leaders to take up this work, make sure we stay focused on organizing for the long haul, and win victories to improve material conditions for the many at the expense of our enemies. Let’s organize! 
        </p>
      </>
    ),
  }
]

class Candidates2020 extends React.Component {
  state = { visible: false, candidate: null, groupedCandidates: [] }

  componentDidMount() {
    this.setState({
      groupedCandidates: this.getGroupedCandidates(),
    })
  }

  showModal = (candidate) => {
    this.setState({
      visible: true,
      candidate: candidate,
    })
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
  }

  images = () => this.props.data.allFile.edges.map((edge) => edge.node)

  image = (candidate) => {
    const name = candidate.name
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/\./g, "")
    return this.images().find((image) => image.name === name).childImageSharp
      .fluid
  }

  getGroupedCandidates = () => {
    const positions = []
    const groups = []
    candidates.forEach((candidate) => {
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
        title="2022 Mass Action Slate"
        color="red"
        heroImageName="index"
        layoutClassName="home"
      >
        <SEO
          title="2022 Chicago DSA Mass Action Slate Delegates and Platform"
          ogImage="home"
        />

        <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {this.state.groupedCandidates.map((group, index) => (
              <div className="position" key={`group-${index}`}>
                <h3>{group.position}</h3>

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
                <li>
                  <strong>Officer Candidate Forum:</strong>{" "}
                  Between June 10 and June 18{" "}
                </li>
                <li>
                  <strong>Deadline to Renew Dues:</strong>{" "}
                  Friday, June 17{" "}
                </li>
                <li>
                  <strong>Polls Open:</strong>{" "}
                  Monday, June 20{" "}
                </li>
                <li>
                  <strong>Polls Close:</strong>{" "}
                  Friday, June 24
                </li>
                <li>
                  <strong>Results Announced:</strong>{" "}
                  Sunday, June 26
                </li>
            </ul>
            <h2>
              Introducing the Chicago Mass Action Platform
            </h2>

            <p>
              The next year is of major importance for our chapter and for the working class of Chicago. The 2023 municipal elections, new labor/shop organizing campaigns, major union contract fights with UPS and CPS, and mass mobilizations against the right wing will be major opportunities to shift the balance of power towards working people and grow our movement. We need a powerful, fighting, worker-led, democratic socialist organization that can meet this moment and wage war against the ruling class during this pivotal moment in our city’s history.
            </p>
            <p>
              We are running a slate of candidates for chapter officer on a shared vision of a Chicago DSA that is rooted in mass-action politics &mdash; where we can move working-class people in every neighborhood in our city into action against the ruling class and into our socialist movement for the long term.
            </p>
            <p>
              There are no shortcuts to building power, and we know we have an opportunity ahead to launch bigger campaigns than ever before that will make us stronger after each fight. To do this, Chicago DSA must prioritize growing militancy within the labor rank and file, running class-struggle electoral campaigns, engaging, recommitting, and developing our membership, conducting Marxist political education, ensuring chapter campaigns are centered on mass organizing, and putting real organizational democracy into practice.
            </p>
            <p>
              The Chicago Bread &amp; Roses caucus has developed a platform laying out a vision for our chapter rooted in mass action. If you are a Chicago DSA member and agree with our platform, we encourage you to sign your name below and to support the Mass Action slate in the chapter officer elections this June. Regardless, we hope you will work with us this next year to build the socialist movement and build working-class power. We don’t have a moment to waste.
            </p>
            <p>
              <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSf5sMP7VoDz1pTydV4y0br0xKaiT16ipe7yKx61iXaVANan7A/viewform">
                <strong>Sign onto the Mass Action Platform</strong>
              </ExternalLink>
            </p>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5sMP7VoDz1pTydV4y0br0xKaiT16ipe7yKx61iXaVANan7A/viewform?embedded=true" width="100%" height="3100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 

            <h3>
              Rank-and-File Labor Work ⚙️🛠️🩺
            </h3>
            <p>
              The exploitation of the working class that powers capitalism also endows us with enormous potential power. As workers, we have the power to stop production and the flow of profits or to create a political crisis when public employees strike. Ending capitalism will require mobilizing this immense power. This means that every question of strategy can be answered by organizing the working class. Whether it is bread and butter workplace issues like wages and benefits or society-wide political questions like guaranteeing universal healthcare, protecting the right to abortion and reproductive health, shifting government funds out of police budgets and into our communities, or halting and reversing the damage that climate change is imposing on our planet, only an organized working class can bring to bear the power necessary to change the world.
            </p>
            <p>
              We believe that the most critical task for socialists then is to help develop a labor movement that is militant, class-conscious, and democratic. To achieve this goal, we believe in the execution of a <ExternalLink href="https://www.jacobinmag.com/2019/03/rank-and-file-strategy-union-organizing">rank-and-file strategy</ExternalLink> where we build ties between the socialist movement and the labor movement primarily at the level of rank-and-file leaders on the shop floor. This means that socialists must organize both alongside those already existing shop floor leaders and as rank-and-file workers themselves to rebuild the connection between the socialist movement and the labor movement.
            </p>
            <p>
              Together, we can work to build unions that are democratic forces ready to confront employers, organize the unorganized, and lead wider working-class political fights. Given our limited resources, such attention should be focused for now on <ExternalLink href="https://www.jacobinmag.com/2016/08/everything-old-is-new-again-mcaveley">strategic industries</ExternalLink> &mdash; those in which workers have the best opportunities to organize and the most leverage to make demands on the capitalist class.
            </p>
            <p>
              To advance rank-and-file labor organizing in Chicago over the next year, we will:
            </p>
            <ul>
              <li>
                Support and grow the rank-and-file jobs pipeline for healthcare workers and the Teamsters and create worker committees at employers with large concentrations of union members
              </li>
              <li>
                Reconstitute a standing strike and solidarity committee to provide ongoing support for strikes and contract fights in Chicago, give all DSA members the opportunity to be part of directly confronting the capitalist class, and build relationships with union members from the multiracial working class and bring them into the socialist movement
              </li>
              <li>
                Support the growth of the labor movement through new organizing, particularly through projects like EWOC and the national DSA solidarity work at Starbucks and Amazon, in a way that raises class consciousness and moves more and more working people from union sympathizers to union members and leaders
              </li>
            </ul>
            <h3>
              Class Struggle Electoral Work 🚪🗳️📬
            </h3>
            <p>
              Outside pressure on politicians is not enough; socialists need to win elections and wield state power in support of a mass movement for social transformation. To win power at the ballot box, we need to build our electoral infrastructure as DSA and chart a path towards building an independent workers’ party. To this end, CDSA should work to elect class-struggle, cadre candidates who have a history of organizing within Chicago and understand and loudly support socialist politics and the socialist movement. Our elected officials should champion their working-class communities and bring them into our fights for our transformative demands.
            </p>
            <p>
              To advance class struggle politics at the ballot box in the next year, we will:
            </p>
            <ul>
              <li>
                Build and support a socialist citywide field infrastructure with concentrated outreach in all Chicago communities and on the doors
              </li>
              <li>
                Fight against developers, charter advocates, and neoliberals on the Board of Education by building on our Local School Council victories, appointing socialists to vacancies, and organizing those councils to fight alongside unions, parents, and students on behalf of our school communities
              </li>
              <li>
                Organize around important elections, including tying the upcoming November 2022 ballot question of the Workers’ Rights Amendment &mdash; which would enshrine workers’ rights to organize and bargain collectively into the state constitution &mdash; to our ongoing electoral work and the municipal 2023 elections to defend and expand our socialist bloc on the City Council
              </li>
              <li>
                Build toward more cohesive statewide Illinois DSA work, including around the Workers’ Rights Amendment, with an ultimate goal of electing candidates to the Illinois state legislature to be able to contest policy fights on a statewide level
              </li>
              <li>
                Connect our labor and electoral work by developing programs for rank-and-file DSA members to organize their unions into endorsing our candidates and ensure in turn that our candidates are bringing the full power of their offices in support of workers organizing and fighting back
              </li>
            </ul>
            <h3>
              Organizing Our Members 📋🗂️📲
            </h3>
            <p>
              Our ability to make meaningful interventions as an organization is dependent on our ability to move people into action. To scale up, we need to activate as many of our members as possible and grow our ranks of socialist organizers. Further, our chapter loses the ability to launch city-wide fights when we rely on a self-selecting base clustered in a small number of neighborhoods. A strong culture of member engagement can help move members from the whole of the multiracial working class past barriers to getting involved.
            </p>
            <p>
              To organize our members over the next year, we will:
            </p>
            <ul>
              <li>
                Build on the chapter’s Organizer School through hosting regular trainings that tie socialist political education with hard organizing skills and practical how-tos
              </li>
              <li>
                Prioritize hosting events that help our members build stronger social ties to undergird our shared political work where members can meet and build relationships and do so in person as much as possible.
              </li>
              <li>
                Systematically call our membership, make asks that provide members with easy on-ramps to take action, and create structures to transform members’ capacity for organizing by moving them up an escalating ladder of engagement and providing purposeful leadership development and coaching
              </li>
              <li>
                Chart engagement through the use of chapter tools like Action Builder where members’ activism can be tracked and levels of engagement can regularly be assessed
              </li>
            </ul>
            <h3>
              Political Education 📚🎒🏫
            </h3>
            <p>
              As a chapter we need to prioritize Marxist political education based on material analysis of the conditions we find ourselves living and organizing in. DSA has members in a wide array of political development, from newer people curious about the socialist movement to members with a lifelong commitment to the socialist project.
            </p>
            <p>
              To advance political education in the chapter over the next year, we will:
            </p>
            <ul>
              <li>
                Meet our members where they are at and not presume fluency in the jargon we use to organize and advance socialism
              </li>
              <li>
                Teach our members about what the labor movement is, what the rank-and-file strategy means, what an independent worker’s party can look like, how to conceptualize strategy, what labor power could bring us, and why we need an ecosocialist politics centered on the power of organized labor in order to decarbonize the atmosphere on the timeline required
              </li>
              <li>
                Educate our members about socialist and populist movements internationally against capitalism and authoritarianism so we can more effectively stand in solidarity with our comrades around the world
              </li>
              <li>
                Build on the solid foundation of Socialist Night Schools that explore the historical roots of specific oppressions to develop the ideological grounding of our members
              </li>
            </ul>
            <h3>
              Mass Organizing Through Campaigns 👥📢 👥
            </h3>
            <p>
              DSA is and must continue to be a mass organization. This means that rather than a small grouping of people with similar ideologies and more time than most to devote to the movement, DSA is an organization for the masses of the working class. The project of winning a socialist world is a project of cohering hundreds of millions of working people into a working class that sees itself as one class with shared interests, and moving it into action against the capitalist class. Everything we want, from Medicare for All, to a Green New Deal, to guaranteed reproductive health, to a right to housing, to the defunding of our violent police forces, can only be achieved when large numbers of working people take action, together, to force the hand of the ruling class.
            </p>
            <p>
              A mass organizing approach must infuse all of our work but particularly our campaign work. When CDSA voted to establish Chapter Campaigns as a concept in 2018, we set four overarching criteria for every campaign: a campaign should build working class power, it should make more socialists, it should develop CDSA as an organization, and it should be winnable. All four of those criteria can only be met when our campaigns are designed to move working people into action and to develop them as socialists and as organizers. Someone who has never been involved in political organizing before should be able to show up at a campaign meeting, immediately be part of meaningful campaign work, and develop both the political perspective and the practical skills to become a leader in our organization through that work
            </p>
            <p>
              To instill this mass approach in our chapter’s work, over the next year we will:
            </p>
            <ul>
              <li>
                Ensure that all chapter campaigns have a winnable goal with clear win/loss conditions using tactics that can engage broad swaths of our membership and the working class generally
              </li>
              <li>
                Closely coordinate the chapter’s campaigns with our member orientation and engagement work so that newer CDSA members don’t fall through the cracks and can start on a path towards becoming effective socialist organizers
              </li>
              <li>
                Develop plans for every campaign to ensure that working people who come into CDSA through a particular campaign don’t feel siloed into that campaign but are instead integrated into the chapter as a whole
              </li>
            </ul>
            <h3>Organizational Democracy ☎️🤝⚖️</h3>
            <p>
              The ruling class will do everything in its power to protect the status quo, and the only way we can win our demands is through a mass, democratic movement where our members feel genuine ownership over the external facing work we take on. Our vision is to grow DSA into an organization that can be the political home for the working-class majority who are not yet politically active and to avoid an organizational culture that is primarily oriented towards existing activists and radicals. A leadership body that plans proactively spends less time catching up reactively. Therefore, our task is to build a durable organization that will be able to withstand the pressures of individual turnover and the shocks of unprecedented political and social conditions like the pandemic that erupted in 2019 and the climate disasters that will continue to disrupt our lives for the foreseeable future.
            </p>
            <p>
              To grow DSA into a healthy, mass organization in the next year, we will:
            </p>
            <ul>
              <li>
                Establish better processes for chapter-wide decision-making by setting clear expectations for chapter leaders to regularly solicit member feedback and actively organize members into the planning and development of our work
              </li>
              <li>
                Set regular chapter and branch meetings for a full year in advance so members know when to expect them and ensure those meeting agendas have purpose: branch meetings should cover political education, new member orientations, clear campaign asks, and discussion of chapter meeting agendas ahead of time. Chapter meetings must have stakes and bring consequential decisions on our path forward to the membership
              </li>
              <li>
                Foster an executive committee and other leadership bodies that working-class people can actively and effectively participate in. That means writing and sticking to effective agendas that keep meetings timely and curbing constant email debates in favor of meaningful meeting agendas where people set aside time to discuss decisions facing the chapter.
              </li>
              <li>
                Encourage a chapter culture based on mutual respect and healthy boundaries. We believe in treating each other as comrades and not coworkers and recognizing that as an all-volunteer organization, we should always extend each other grace rather than demand immediate responses or flawless execution of administrative work. Political dialogue, especially when there is disagreement or conflict, should take place through direct conversations and open meetings, in-person as much as possible, rather than entirely through text-posts in online forum.
              </li>
            </ul>
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
              <h2>{this.state.candidate.name}</h2>
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
    allFile(
      filter: {
        absolutePath: { glob: "**/headshots/chicago-delegates-2022/*" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`

export default Candidates2020
