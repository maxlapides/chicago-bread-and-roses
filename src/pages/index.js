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
            In my view, I want to continue developing DSA as the organization to create a nucleus of  a party for the working-class. Being a member of the Bread & Roses caucus has informed my thinking and political development in understanding, with the strategizing of elections through a class-struggle lens, critically engaging what it means to be a part of a rank-and-file led labor movement, and tying anti-oppression politics including abolitionism, the struggle against white supremacy, feminism, indigenous empowerment, and queer empowerment to mass-movement struggles.  
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
        <p> </p>
      </>
    ),
  },
  {
    name: "JP Kaderbek",
    bio: (
      <>
        <p> </p>
      </>
    ),
  },
  {
    name: "Lillian Osborne",
    bio: (
      <>
        <p> </p>
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
        <p> </p>
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
            A little about me: I am relatively new to the Chicago chapter, but you might know me from my work facilitating small group discussions at Socialist Night School and the No Shortcuts Organizer School. As a member of the Political Education and Policy Committee, I also help with content development and phone banking. Before moving to Chicago, I was a member of Baltimore DSA, and was also active in my union, the Baltimore Teachers Union. As a rank-and-file activist, I organized with my co-workers against a draconian new evaluation policy that the school board was trying to implement, and was part of the effort by socialists across the country to have our unions endorse Bernie for the 2020 presidential election. Ultimately, my AFT local did not endorse Bernie, but the campaign helped us to build a core group of teacher activists within the union, who raised the profile of socialist politics and successfully pushed the city to provide more laptops for our students during the pandemic. I believe that because of my experience organizing in labor and socialist movements for the past several years, I can offer a useful perspective at the national convention. If elected as a delegate, my votes at the convention will always be informed by the fundamental Marxist principles that the emancipation of the working class must be accomplished by the working class itself, and that winning socialism will require mass, collective action. As a member of the Bread &amp; Roses caucus, I am committed to uniting DSA behind this political vision, while also maintaining good relationships with comrades of all perspectives and learning from different points of view. (You can read more about <ExternalLink href="https://breadandrosesdsa.org/where-we-stand/">Bread &amp; Roses</ExternalLink> here.)
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
        <p> </p>
      </>
    ),
  },
  {
    name: "Tristan Bock-Hughes",
    bio: (
      <>
        <p> </p>
      </>
    ),
  },
  {
    name: "Waleeta Canon",
    bio: (
      <>
        <p> </p>
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
            <h2>Important Dates:</h2>
            <ul>
                <li><strong>Chicago DSA Candidate Forums:</strong> May 12 and May 15</li>
                <li><strong>Voting on Delegates:</strong> May 23–28 (online)</li>
                <li><strong>2021 DSA Convention:</strong> August 1–8 (<ExternalLink href="https://convention2021.dsausa.org/">more info</ExternalLink>)</li>
            </ul>
            <h2>Introducing the B&R Slate of National Convention Delegates for Chicago DSA</h2>

            <p>
                During the past five years, DSA members have elected socialists to Congress, helped organize the teacher strike wave, joined the mass mobilization against police killings, and brought a socialist political perspective to millions of people during the Bernie Sanders presidential campaigns. In the process, DSA has transformed from a small 5,000-member activist group to 90,000+-member mini-mass organization. We are running to be delegates to the national convention as part of the Bread and Roses slate because we believe DSA can do much more over the next two years to build on this progress. We believe DSA should focus on the following core areas:
            </p>
            <ul>
            <li>
                <strong>Building roots in the multi-racial working class.</strong> DSA’s members are still largely a self-selected group, who are disproportionately white, and are underrepresented in the sectors of the economy where workers have the most leverage. To address this, we need to train more of our members to become organizers who can recruit from the multi-racial working class. That’s why we support the resolution <ExternalLink href="https://docs.google.com/document/d/1mfQkXDU2732CCiBp6ztp6GpyuGT9AXdzYQ0YeHWuCtI/edit">Beyond 100K: Building a Mass Socialist Organization</ExternalLink>. Recognizing the legacy of racist oppression in the US, and the need to build solidaristic anti-racist campaigns, we also support the <ExternalLink href="https://docs.google.com/document/d/1DJ39rmzUb8wYCyqwvk9RptrF-w5l79wUgUII-EbE93c/edit">Resolution to Form a National Committee for Reparations to Black People</ExternalLink>, which was co-authored by a member of our slate.
            </li>
            <li>
                <strong>Rank-and-file labor organizing.</strong> Socialism will not become a reality until there is an organized working class ready to fight for it. We believe DSA can make progress on this front by continuing its commitment to the rank-and-file strategy: developing and expanding a layer of socialist organizers in workplaces who fight the boss, push for union democracy, promote a socialist political perspective on the job, and grow the labor movement. That’s why we support the resolution <ExternalLink href="https://docs.google.com/document/d/1zf1PKeKlYXEsP8nSMsb0uHmqyCMinuRw1ofhDVnT6QA/edit">Building Worker Power to Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023</ExternalLink>.
            </li>
            <li>
                <strong>Class struggle elections.</strong> By running campaigns to elect socialists to public office, we can help build our movements and promote an alternative to the billionaire-dominated political establishment. And in the long term, we are committed to building an organization that can take state power as part of the transition to socialism. That’s why we support the National Electoral Committee’s resolution <ExternalLink href="https://dsanec.github.io/resolution/">Toward a Mass Party in the United States</ExternalLink>.
            </li>
            <li>
                <strong>A strong and democratic national organization.</strong> DSA has a structure inherited from the days when it was still a small activist group. Today, to build a powerful mass organization that can take on and defeat the ruling class, we need to strengthen DSA and increase its level of internal democracy. That’s why we support a <ExternalLink href="https://docs.google.com/document/d/12J3OXOIXq6btqKT1BoTt2UCrMt6If8pTjZQAgl_miAg/edit">constitutional change to make DSA’s National Director an elected position</ExternalLink>, <ExternalLink href="https://docs.google.com/document/d/1i333Ci59kGzV-ivbSwOl8Pg_WoUH0yHugRV7eetzGGI/edit">stipends for NPC Steering Committee members</ExternalLink>, and the <ExternalLink href="https://docs.google.com/document/d/1hexVaR046oZF-RnBSijv2WMgN80WlCSONhep85uopus/edit">Resolution to Strengthen DSA From the Bottom Up Through National Matching Funds For Chapters to Hire Staff and Open Offices</ExternalLink>. 
            </li>
            </ul>
            <p>
                If you support these priorities, vote for the Bread &amp; Roses slate: Alec Hudson, Anthony Quezada, JP Kaderbek, Lillian Osborne, Melinda Bunnage, Sandy Barnard, Sarah Zimmerman, Stephen Thompson, Sveta Stoytcheva, Tristan Bock-Hughes, Waleeta Canon, and Will Bloom.
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
