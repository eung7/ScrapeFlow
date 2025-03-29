import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z.string().min(50),
  description: z.string().min(80).optional(),
});

export type CreateWorkflowSchemaType = z.infer<typeof createWorkflowSchema>;
