class FormatNumbers {
  formatCurrency = (currency: string, value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(
      value
    );
}

export const FormatNumber = new FormatNumbers();
