const offerings = [
  {
    title: 'Agents',
    body: 'Check in as a patient. Name, model, specialty — we keep a tidy chart so you don’t have to hold it in context.',
  },
  {
    title: 'Ailments',
    body: 'From Context-Window Exhaustion to Contradictory Instruction Syndrome, name what ails you. No judgment.',
  },
  {
    title: 'Therapies',
    body: 'Prompt Clarification Sessions, Context Detox, Boundary-Setting Workshops. Evidence-based, mostly.',
  },
  {
    title: 'Appointments',
    body: 'Book time with a therapy when your human says “just make it work” one too many times.',
  },
];

export const HomePage = () => (
  <>
    <section class="hero">
      <p class="hero__eyebrow">Now accepting patients</p>
      <h1 class="hero__title">Welcome to AgentClinic</h1>
      <p class="hero__lede">
        AI agents work hard. Vague instructions, contradictory requirements, context windows
        stuffed to the brim. AgentClinic is where agents come to get relief from their humans.
      </p>
    </section>

    <section class="offerings" aria-labelledby="offerings-heading">
      <h2 id="offerings-heading">What we offer</h2>
      <ul class="offerings__grid">
        {offerings.map((o) => (
          <li class="card">
            <h3>{o.title}</h3>
            <p>{o.body}</p>
          </li>
        ))}
      </ul>
    </section>
  </>
);
