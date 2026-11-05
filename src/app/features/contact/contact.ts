import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactApiService } from './data-access/contact-api.service';
import { MetaService } from '../../core/services/meta.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ContactApiService);
  private readonly meta = inject(MetaService);

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    subject: ['', [Validators.maxLength(200)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
  });

  readonly isSubmitting = signal<boolean>(false);
  readonly submitSuccess = signal<boolean>(false);
  readonly submitError = signal<string | null>(null);

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Contact',
      description:
        'Get in touch with Jobayer for software engineering opportunities, technical consulting, or collaborations.',
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(null);

    const payload = this.contactForm.getRawValue();

    this.api.sendMessage(payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset();
      },
      error: (err: Error) => {
        this.isSubmitting.set(false);
        this.submitError.set(
          err.message || 'Unable to deliver your message at this time. Please try again later.',
        );
      },
    });
  }
}
