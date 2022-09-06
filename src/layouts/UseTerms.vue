<template>
  <div class="use-terms">
    <article class="use-terms-article">
      <h4 class="use-terms-title">Termos de Uso</h4>
      <h5 class="use-terms-title">1. Termos</h5>
      <p class="use-terms-desc">
        Ao acessar ao site prepara.me, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
      </p>
      <h5 class="use-terms-title">2. Uso de Licença</h5>
      <p class="use-terms-desc">
        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site prepara.me , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
      </p>
      <ol>
        <li class="use-terms-desc">modificar ou copiar os materiais;</li>
        <li class="use-terms-desc">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
        <li class="use-terms-desc">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site prepara.me;</li>
        <li class="use-terms-desc">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
        <li class="use-terms-desc">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
      </ol>
      <p class="use-terms-desc">
        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por prepara.me a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
      </p>
      <h5 class="use-terms-title">3. Isenção de responsabilidade</h5>
      <p class="use-terms-desc">
        Os materiais no site da prepara.me são fornecidos 'como estão'. prepara.me não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
      </p>
      <p class="use-terms-desc">
        Além disso, o prepara.me não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
      </p>
      <h5 class="use-terms-title">4. Limitações</h5>
      <p class="use-terms-desc">
        Em nenhum caso o prepara.me ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em prepara.me, mesmo que prepara.me ou um representante autorizado da prepara.me tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
      </p>
      <h5 class="use-terms-title">5. Precisão dos materiais</h5>
      <p class="use-terms-desc">
        Os materiais exibidos no site da prepara.me podem incluir erros técnicos, tipográficos ou fotográficos. prepara.me não garante que qualquer material em seu site seja preciso, completo ou atual. prepara.me pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, prepara.me não se compromete a atualizar os materiais.
      </p>
      <h5 class="use-terms-title">6. Links</h5>
      <p class="use-terms-desc">
        O prepara.me não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por prepara.me do site. O uso de qualquer site vinculado é por conta e risco do usuário.
      </p>
      <h4 class="use-terms-title">Modificações</h4>
      <p class="use-terms-desc">
        O prepara.me pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
      </p>
      <h4 class="use-terms-title">Lei aplicável</h4>
      <p class="use-terms-desc">
        Estes termos e condições são regidos e interpretados de acordo com as leis do prepara.me e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </p>
    </article>
  </div>
</template>

<script>

  export default {
    provide: function() {
      return {};
    },
    data() {
      return {};
    },
    created() {
      window.scrollTo(0, 0);
    }
  };
</script>

<style lang="scss">
  .use-terms-article {
    padding: 2%;
  }

  .use-terms-title {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    margin: 1rem;
    color: $back-dis;
  }

  .use-terms-desc {
    font-weight: 300;
    font-family: "Nunito", sans-serif;
    text-align: justify;
  }

  p.use-terms-desc{
    text-indent: 2em;
  }

  li.use-terms-desc{
    margin-left: 4em;
    list-style-type: upper-alpha;
  }
</style>
