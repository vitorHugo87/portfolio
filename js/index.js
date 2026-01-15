const dateNow = new Date();

// Atualiza a idade automaticamente
let age = dateNow.getFullYear() - ((dateNow.getMonth() > 4) ? 2005 : 2006);
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(age);
document.querySelectorAll(".age").forEach(el => el.innerHTML = age);

// Atualiza a badge de programador automaticamente
const roundedYearsProgramming = Math.round((dateNow.getFullYear() - 2023))
document.getElementById("years-programming").innerHTML = roundedYearsProgramming;

const elAdeptness = document.getElementById("adeptness");
if (roundedYearsProgramming >= 4) elAdeptness.innerHTML = "Intermediário";
else if (roundedYearsProgramming >= 8) elAdeptness.innerHTML = "Avançado";
else if (roundedYearsProgramming >= 12) elAdeptness.innerHTML = "Profissional";

// Atualiza o footer automaticamente
document.getElementById("footer-copyright").innerHTML = dateNow.getFullYear();

// Banner de Imagens
const img1 = { "id": 1, "path": "media/gifs/spare8_ace_combat.gif", "desc": "Ace Combat 7: Skies Unknown" };
const img2 = { "id": 2, "path": "media/gifs/toyota_trueno.gif", "desc": "Toyota Trueno AE86 Panda - Initial D" };
const img3 = { "id": 3, "path": "media/gifs/hollow_knight_grimm.gif", "desc": "Hollow Knight - Grimm Troupe" };
const img4 = { "id": 4, "path": "media/gifs/need_for_speed.gif", "desc": "Need for Speed Heat" };
const imgs = [img1, img2, img3, img4];

const focusedPreview = document.getElementById("focused-preview");
const previewDescription = document.getElementById("preview-desc");

document.querySelectorAll(".preview-img").forEach(el => {
  el.addEventListener("click", () => {
    const imgSelected = imgs.find(img => img.id == el.dataset.id);
    const oldImage = imgs.find(img => img.id == focusedPreview.dataset.id);

    focusedPreview.dataset.id = imgSelected.id;
    focusedPreview.src = imgSelected.path;
    previewDescription.innerHTML = ("\"" + imgSelected.desc + "\"");

    el.dataset.id = oldImage.id;
    el.src = oldImage.path;
  });
});

// Ativando Tooltips do Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// "Ativando" o Tooltip em celulares e tablets
let currentTooltip = null;
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  const tip = new bootstrap.Tooltip(el);

  el.addEventListener("touchstart", e => {
    if (!e.target.dataset.id === "social-img") {
      e.preventDefault(); // Evita que Links com Tooltips sejam "bloqueados"
    }
    // Se tocar no mesmo tooltip, alterna
    if (currentTooltip === tip) {
      tip.hide();
      currentTooltip = null;
      return;
    }

    // Fecha tooltip anterior (se houver)
    if (currentTooltip) {
      currentTooltip.hide();
    }

    // Abre o tooltip novo
    tip.show();
    currentTooltip = tip;

    // Fecha tooltip se tocar fora
    document.addEventListener("touchstart", function handler(ev) {
      if (!el.contains(ev.target)) {
        tip.hide();
        currentTooltip = null;
        document.removeEventListener("touchstart", handler);
      }
    });
  });
});