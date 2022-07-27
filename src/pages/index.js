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
    name: "Northside Blue Line",
//    position: "Chapter Co-chair",
    bio: (
      <>
        <ul>
          <li>Sarah C.</li>
          <li>Anna F.</li>
          <li>Sean K.</li>
          <li>Patrick M.</li>
          <li>Alec R.S.</li>
          <li>Dov S.</li>
          <li>Kate M.</li>
        </ul>
      </>
    ),
  },
  {
    name: "Northside Red Line",
//    position: "Chapter Co-chair",
    bio: (
      <>
        <ul>
          <li>Waleeta C.</li>
          <li>Cait G.</li>
          <li>Isa J.</li>
          <li>Heather M.</li>
          <li>Casey M.</li>
          <li>Michelle O.</li>
        </ul>
      </>
    ),
  },
  {
    name: "South Side",
//    position: "Political Education Coordinator",
    bio: (
      <>
        <ul>
          <li>Sarah H.</li>
          <li>Rich R.</li>
        </ul>
      </>
    ),
  },
  {
    name: "Labor",
//    position: "Campaigns Coordinator",
    bio: (
      <>
        <ul>
          <li>Abby A.</li>
          <li>Brendan B.S.</li>
          <li>Tristan B.H.</li>
          <li>Will B.</li>
          <li>JP K.</li>
          <li>Elce R.</li>
          <li>Emilie R.</li>
          <li>Ryan V.</li>
        </ul>
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
            <h2>Branch Slates</h2>
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
                  <strong>Branch Candidate Forums:</strong>{" "}
                  Between July 12 and July 18{" "}
                </li>
                <li>
                  <strong>Deadline to Renew Dues:</strong>{" "}
                  Monday, July 18{" "}
                </li>
                <li>
                  <strong>Polls Open:</strong>{" "}
                  Monday, July 25{" "}
                </li>
                <li>
                  <strong>Polls Close:</strong>{" "}
                  Friday, July 29
                </li>
                <li>
                  <strong>Results Announced:</strong>{" "}
                  Sunday, July 31
                </li>
            </ul>
            <h2>
              Introducing the Chicago Mass Action Platform
            </h2>

            <p>
              The next year is of major importance for our chapter and for the working class of Chicago. The 2023 municipal elections, new labor/shop organizing campaigns, major union contract fights with UPS and CPS, and mass mobilizations against the right wing will be major opportunities to shift the balance of power towards working people and grow our movement. We need a powerful, fighting, worker-led, democratic socialist organization that can meet this moment and wage war against the ruling class during this pivotal moment in our city’s history. 
            </p>
            <p>
              We are running a slate of candidates for branch representatives on a shared vision of a Chicago DSA that is rooted in mass action politics &mdash; where we can move working class people in every neighborhood in our city into action against the ruling class and into our socialist movement for the long term. 
            </p>
            <p>
              There are no shortcuts to building power, and we know we have an opportunity ahead to launch bigger campaigns than ever before that will make us stronger after each fight. To do this, Chicago DSA must prioritize growing militancy within the labor rank and file, running class-struggle electoral campaigns, engaging, recommitting, and developing our membership, conducting Marxist political education, ensuring chapter campaigns are centered on mass organizing, and putting real organizational democracy into practice.
            </p>
            <p>
              The Chicago Bread &amp; Roses caucus has developed a platform laying out a vision for our chapter rooted in mass action. If you are a Chicago DSA member and agree with our platform, we encourage you to sign your name below and to support the Mass Action slate in the chapter branch elections this July. Regardless, we hope you will work with us this next year to build the socialist movement and build working class power. We don’t have a moment to waste.
            </p>
            <p>
              <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSf5sMP7VoDz1pTydV4y0br0xKaiT16ipe7yKx61iXaVANan7A/viewform">
                <strong>Sign onto the Mass Action Platform</strong>
              </ExternalLink>
            </p>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5sMP7VoDz1pTydV4y0br0xKaiT16ipe7yKx61iXaVANan7A/viewform?embedded=true" width="640" height="2865" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  

            <h3>
              Rank-and-File Labor Work ⚙️🛠️🩺
            </h3>
            <p>
              The exploitation of the working class that powers capitalism also endows us with enormous potential power. As workers, we have the power to stop production and the flow of profits, or to create a political crisis when public employees strike. Ending capitalism will require mobilizing this immense power. This means that every question of strategy can be answered by organizing the working class. Whether it is bread and butter workplace issues like wages and benefits, or society-wide political questions like guaranteeing universal healthcare, protecting the right to abortion and reproductive health, shifting government funds out of police budgets and into our communities, or halting and reversing the damage that climate change is imposing on our planet, only an organized working class can bring to bear the power necessary to change the world.
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
                Support and grow the rank and file jobs pipeline for healthcare workers and the Teamsters, and create worker committees at employers with large concentrations of union members
              </li>
              <li>
                Reconstitute a standing strike and solidarity committee to provide ongoing support for strikes and contract fights in Chicago, give all DSA members the opportunity to be part of directly confronting the capitalist class, and build relationships with union members from the multiracial working class and bring them into the socialist movement
              </li>
              <li>
                Support the growth of the labor movement through new organizing, particularly through projects like EWOC and the national DSA solidarity work at Starbucks and Amazon, in a way that raises class consciousness and moves more and more working people from union sympathizers to union members and leaders
              </li>
            </ul>
            <h3>
              Class-Struggle Electoral Work 🚪🗳️📬
            </h3>
            <p>
              Outside pressure on politicians is not enough; socialists need to win elections and wield state power in support of a mass movement for social transformation. To win power at the ballot box, we need to build our electoral infrastructure as DSA and chart a path towards building an independent workers’ party. To this end, CDSA should work to elect class-struggle, cadre candidates who have a history of organizing within Chicago and understand and loudly support socialist politics and the socialist movement. Our elected officials should champion their working-class communities and bring them into our fights for our transformative demands.
            </p>
            <p>
              To advance class-struggle politics at the ballot box in the next year, we will:
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
