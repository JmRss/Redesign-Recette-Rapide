module.exports = {
  content: ['./index.html', './recette.html'], // Spécifiez les fichiers à analyser pour les classes utilisées
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [], // Extracteur par défaut pour les classes
};
