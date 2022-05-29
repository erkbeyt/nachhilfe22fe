export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const TutoringFormErrorMessages = [
  new ErrorMessage('subject', 'required', 'You have to enter a tutor subject!'),
  new ErrorMessage('description', 'required', 'You have to enter a description for the subject!'),
  new ErrorMessage('date', 'required', 'You have to enter min. one tutoring date')
];
