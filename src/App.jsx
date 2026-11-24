import React, { useState } from "react";

const questions = [
  { q: "Uma escola recebeu 348 livros novos e depois recebeu mais 276. Quantos livros recebeu ao todo?", a: ["614 livros", "624 livros", "634 livros", "644 livros"], correct: 1 },
  { q: "Uma papelaria tinha 850 cadernos e vendeu 375. Quantos cadernos sobraram?", a: ["475", "485", "525", "575"], correct: 0 },
  { q: "Uma caixa possui 24 lápis. Quantos lápis há em 6 caixas iguais?", a: ["124", "134", "144", "154"], correct: 2 },
  { q: "Uma professora dividiu 156 folhas igualmente entre 4 turmas. Quantas folhas cada turma recebeu?", a: ["36", "38", "39", "42"], correct: 2 },
  { q: "Qual é o valor do algarismo 7 no número 47.325?", a: ["7", "70", "700", "7.000"], correct: 3 },
  { q: "Qual alternativa apresenta o número quatro mil, trezentos e vinte e oito?", a: ["4.238", "4.328", "4.382", "4.823"], correct: 1 },
  { q: "Uma pizza foi dividida em 8 pedaços iguais. Pedro comeu 3 pedaços. Que fração representa a parte que ele comeu?", a: ["3/8", "5/8", "3/5", "8/3"], correct: 0 },
  { q: "Qual fração é equivalente a 1/2?", a: ["2/3", "2/4", "3/5", "1/3"], correct: 1 },
  { q: "Uma garrafa contém 2 litros de água. Quantos mililitros há nessa garrafa?", a: ["200 mL", "1.000 mL", "2.000 mL", "20.000 mL"], correct: 2 },
  { q: "Uma aula começou às 13h30 e terminou às 17h. Quanto tempo durou a aula?", a: ["2 horas e 30 minutos", "3 horas", "3 horas e 30 minutos", "4 horas e 30 minutos"], correct: 2 },
  { q: "João comprou um brinquedo por R$ 35,00 e pagou com uma nota de R$ 50,00. Quanto recebeu de troco?", a: ["R$ 10,00", "R$ 15,00", "R$ 20,00", "R$ 25,00"], correct: 1 },
  { q: "Um terreno retangular possui 12 metros de comprimento e 8 metros de largura. Qual é o seu perímetro?", a: ["20 metros", "32 metros", "40 metros", "96 metros"], correct: 2 },
  { q: "Qual figura geométrica possui quatro lados iguais e quatro ângulos retos?", a: ["Retângulo", "Triângulo", "Quadrado", "Trapézio"], correct: 2 },
  { q: "Uma biblioteca possui 1.250 livros. Desses, 425 são de histórias infantis e 380 são de aventuras. Quantos livros são de outros gêneros?", a: ["345", "445", "455", "495"], correct: 1 },
  { q: "Observe a sequência: 5, 10, 15, 20, 25, ___. Qual número completa a sequência?", a: ["28", "30", "35", "40"], correct: 1 },
  { q: "Uma fábrica produz 125 brinquedos por dia. Quantos brinquedos produzirá em 4 dias, mantendo a mesma produção?", a: ["400", "450", "500", "550"], correct: 2 },
  { q: "Uma receita utiliza 250 gramas de farinha. Para preparar duas receitas iguais, quantos gramas serão necessários?", a: ["350 g", "400 g", "450 g", "500 g"], correct: 3 },
  { q: "Qual é o resultado da expressão: 120 + 30 × 2?", a: ["180", "240", "300", "360"], correct: 0 },
  { q: "Uma escola organizou 5 ônibus com 42 estudantes em cada um. Quantos estudantes foram transportados?", a: ["200", "205", "210", "220"], correct: 2 },
  { q: "Uma fita possui 3 metros de comprimento. Quantos centímetros ela possui?", a: ["30 cm", "300 cm", "3.000 cm", "30.000 cm"], correct: 1 },
  { q: "Em uma pesquisa, 35 alunos disseram gostar de futebol, 20 de vôlei e 15 de basquete. Quantos alunos participaram da pesquisa?", a: ["60", "65", "70", "75"], correct: 2 },
  { q: "Uma caixa possui 48 bombons. Eles serão divididos igualmente entre 6 crianças. Quantos bombons cada criança receberá?", a: ["6", "7", "8", "9"], correct: 2 },
  { q: "Qual é a decomposição correta do número 6.482?", a: ["6.000 + 400 + 80 + 2", "6.000 + 40 + 80 + 2", "600 + 400 + 80 + 2", "6.000 + 400 + 8 + 2"], correct: 0 },
  { q: "Uma fazenda possui 240 animais. Um quarto deles são galinhas. Quantas galinhas existem nessa fazenda?", a: ["40", "50", "60", "80"], correct: 2 },
  { q: "Mariana tinha R$ 100,00. Comprou uma mochila por R$ 48,00 e um estojo por R$ 17,00. Quanto dinheiro sobrou?", a: ["R$ 25,00", "R$ 30,00", "R$ 35,00", "R$ 45,00"], correct: 2 }
];

export default function App() {
  const [student, setStudent] = useState("");
  const [classroom, setClassroom] = useState("");
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const score = questions.reduce(
    (total, question, index) => total + (answers[index] === question.correct ? 1 : 0),
    0
  );
  const answered = Object.keys(answers).length;

  function finishQuiz() {
    if (!student.trim()) {
      alert("Digite o nome do aluno antes de finalizar.");
      return;
    }
    if (answered < questions.length) {
      alert(`Você ainda precisa responder ${questions.length - answered} questão(ões).`);
      return;
    }
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restartQuiz() {
    setAnswers({});
    setFinished(false);
    setStudent("");
    setClassroom("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f1f4f9; color: #263247; }
        .page { min-height: 100vh; padding: 25px 15px 50px; }
        .container { max-width: 850px; margin: auto; }
        .header { background: #243e72; color: white; padding: 35px 25px; border-radius: 16px; text-align: center; margin-bottom: 22px; }
        .header h1 { margin: 0 0 10px; font-size: 28px; }
        .header p { margin: 6px 0; opacity: .9; }
        .card { background: white; padding: 24px; border-radius: 14px; margin-bottom: 18px; box-shadow: 0 3px 12px rgba(0,0,0,.05); }
        .student-fields { display: grid; grid-template-columns: 2fr 1fr; gap: 15px; }
        label { display: block; font-weight: bold; margin-bottom: 8px; }
        input { width: 100%; padding: 13px; border: 1px solid #ccd3df; border-radius: 8px; font-size: 16px; }
        .progress { height: 9px; background: #e5eaf2; border-radius: 20px; overflow: hidden; margin-top: 12px; }
        .progress-bar { height: 100%; background: #3c78d8; transition: width .2s; }
        .question { border: 1px solid #e1e6ee; border-radius: 12px; padding: 22px; margin-bottom: 16px; background: white; }
        .question h3 { font-size: 17px; line-height: 1.6; margin: 0 0 18px; }
        .number { color: #315b9c; font-weight: bold; }
        .option { display: flex; align-items: center; gap: 12px; padding: 13px; border: 1px solid #dce2eb; border-radius: 9px; margin-top: 9px; cursor: pointer; transition: .2s; }
        .option:hover { background: #f2f6fc; }
        .option.selected { background: #eaf1ff; border-color: #3c78d8; }
        .option input { width: 17px; height: 17px; accent-color: #315b9c; cursor: pointer; }
        .option.correct { background: #e6f5e9; border-color: #48a35b; }
        .option.wrong { background: #fff0ef; border-color: #d65a50; }
        .feedback { font-size: 14px; margin-top: 8px; font-weight: bold; }
        .correct-text { color: #26843b; }
        .wrong-text { color: #c23c32; }
        .button { width: 100%; padding: 16px; background: #315b9c; color: white; border: none; border-radius: 10px; font-size: 17px; font-weight: bold; cursor: pointer; margin-top: 15px; }
        .button:hover { background: #244675; }
        .result { text-align: center; padding: 30px 20px; }
        .score { font-size: 55px; color: #315b9c; font-weight: bold; margin: 15px 0; }
        .result-details { display: flex; justify-content: center; gap: 35px; flex-wrap: wrap; margin-top: 20px; }
        .result-details strong { display: block; font-size: 25px; margin-bottom: 5px; }
        @media(max-width: 600px) { .student-fields { grid-template-columns: 1fr; } .header h1 { font-size: 23px; } .card, .question { padding: 18px; } }
        @media print { body { background: white; } .button { display: none; } }
      `}</style>

      <main className="container">
        <header className="header">
          <h1>SIMULADO SAEGO</h1>
          <p>Matemática | 5º Ano</p>
          <p>25 questões de múltipla escolha</p>
        </header>

        <section className="card">
          <div className="student-fields">
            <div>
              <label>Nome do aluno</label>
              <input value={student} onChange={e => setStudent(e.target.value)} disabled={finished} placeholder="Digite seu nome" />
            </div>
            <div>
              <label>Turma</label>
              <input value={classroom} onChange={e => setClassroom(e.target.value)} disabled={finished} placeholder="Ex.: 5º A" />
            </div>
          </div>
        </section>

        {!finished && (
          <section className="card">
            <strong>Progresso: {answered} de 25 questões respondidas</strong>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${answered / 25 * 100}%` }} />
            </div>
          </section>
        )}

        {finished && (
          <section className="card result">
            <h2>Resultado do simulado</h2>
            <p>Aluno: <strong>{student}</strong></p>
            <p>Turma: <strong>{classroom || "Não informada"}</strong></p>
            <div className="score">{score}/25</div>
            <p>Você acertou {score} de 25 questões.</p>
            <div className="result-details">
              <div><strong className="correct-text">{score}</strong><span>Acertos</span></div>
              <div><strong className="wrong-text">{25 - score}</strong><span>Erros</span></div>
              <div><strong>{Math.round(score / 25 * 100)}%</strong><span>Aproveitamento</span></div>
            </div>
            <p style={{ marginTop: 25 }}>Confira abaixo suas respostas e o gabarito.</p>
          </section>
        )}

        {questions.map((question, index) => (
          <section className="question" key={index}>
            <h3><span className="number">Questão {index + 1}.</span> {question.q}</h3>
            {question.a.map((option, optionIndex) => {
              const selected = answers[index] === optionIndex;
              const isCorrect = question.correct === optionIndex;
              let optionClass = "option";
              if (selected) optionClass += " selected";
              if (finished && isCorrect) optionClass += " correct";
              if (finished && selected && !isCorrect) optionClass += " wrong";

              return (
                <label className={optionClass} key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    checked={selected}
                    disabled={finished}
                    onChange={() => setAnswers(previous => ({ ...previous, [index]: optionIndex }))}
                  />
                  <span><strong>{String.fromCharCode(65 + optionIndex)})</strong> {option}</span>
                  {finished && isCorrect && <span className="correct-text">✓</span>}
                </label>
              );
            })}
            {finished && (
              <p className={`feedback ${answers[index] === question.correct ? "correct-text" : "wrong-text"}`}>
                {answers[index] === question.correct
                  ? "Você acertou!"
                  : `Resposta correta: ${String.fromCharCode(65 + question.correct)}) ${question.a[question.correct]}`}
              </p>
            )}
          </section>
        ))}

        {!finished
          ? <button className="button" onClick={finishQuiz}>FINALIZAR SIMULADO</button>
          : <button className="button" onClick={restartQuiz}>RECOMEÇAR SIMULADO</button>}
      </main>
    </div>
  );
}
